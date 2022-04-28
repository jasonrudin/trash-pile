import {Buffer} from 'buffer';
import * as BufferLayout from '@solana/buffer-layout';
import {
  Account, 
  createAccount, 
  createMint, 
  getOrCreateAssociatedTokenAccount, 
  mintTo,
  TOKEN_PROGRAM_ID
} from '@solana/spl-token';
import {
  Connection,
  Keypair,
  PublicKey,
  sendAndConfirmTransaction,
  Transaction,
  TransactionInstruction,
  TransactionSignature,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';
import fs from 'mz/fs';
import path from 'path';

import {getPayer, getRpcUrl, createKeypairFromFile, getOrCreateTrashTokenMintAddress} from './utils';

const PROGRAM_PATH = path.resolve(__dirname, '../../program/dist/program');
const PROGRAM_SO_PATH = path.join(PROGRAM_PATH, 'trashpile_solana.so');
const PROGRAM_KEYPAIR_PATH = path.join(PROGRAM_PATH, 'trashpile_solana-keypair.json');

/**
 * Establish a connection to the cluster
 * using rpc url defined in ~/.config/solana/cli/config.yml if available
 */
let connection: Connection;
export async function establishConnection(): Promise<void> {
  const rpcUrl = await getRpcUrl();
  connection = new Connection(rpcUrl, 'confirmed');
  const version = await connection.getVersion();
  console.log('Connection to cluster established:', rpcUrl, version);
}
  
/**
 * Establish an account to pay for everything
 * using keypair path defined in ~/.config/solana/cli/config.yml if available
 */
let payer: Keypair;
export async function establishPayer(): Promise<void> {
  let fees = 0;
  if (!payer) {
    const {feeCalculator} = await connection.getRecentBlockhash();

    // Calculate the cost of sending transactions
    fees += feeCalculator.lamportsPerSignature * 100; // wag
    
    payer = await getPayer();
  }
  
  let lamports = await connection.getBalance(payer.publicKey);
  if (lamports < fees) {
    // If current balance is not enough to pay for fees, request an airdrop
    const sig = await connection.requestAirdrop(
      payer.publicKey,
      fees - lamports,
    );
    await connection.confirmTransaction(sig);
    lamports = await connection.getBalance(payer.publicKey);
  }

  console.log(
    'Using account',
    payer.publicKey.toBase58(),
    'containing',
    lamports / LAMPORTS_PER_SOL,
    'SOL to pay for fees',
  );
}
  
/**
 * Check if the BPF program has been deployed to the cluster
 */
let programId: PublicKey;
export async function checkProgram(): Promise<void> {
  // Read program id from keypair file
  try {
    const programKeypair = await createKeypairFromFile(PROGRAM_KEYPAIR_PATH);
    programId = programKeypair.publicKey;
  } catch (err) {
    const errMsg = (err as Error).message;
    throw new Error(
      `Failed to read program keypair at '${PROGRAM_KEYPAIR_PATH}' due to error: ${errMsg}.`,
    );
  }

  // Check if the program has been deployed
  const programInfo = await connection.getAccountInfo(programId);
  if (programInfo === null) {
    if (fs.existsSync(PROGRAM_SO_PATH)) {
      throw new Error(
        'Program needs to be deployed with `npm run deploy_program`',
      );
    } else {
      throw new Error('Program needs to be built and deployed');
    }
  } else if (!programInfo.executable) {
    throw new Error(`Program is not executable`);
  }
  console.log(`Using program ${programId.toBase58()}`);
}

/**
 * Establish a new tokenToDump owned by the payer account, 
 * to be dumped into trashpile
 */
let tokenToDumpMintAddress: PublicKey;
let tokenToDumpSrcAddress: PublicKey;
let tokenToDumpDest: Account;
export async function establishTokenToDump(): Promise<void> {
  tokenToDumpMintAddress = await createMint(
    connection,
    payer,
    payer.publicKey,
    null,
    9,
  );
  console.log(
    'Using tokenToDump with mint ',
    tokenToDumpMintAddress.toBase58()
  );

  tokenToDumpSrcAddress = await createAccount(
    connection,
    payer,
    tokenToDumpMintAddress,
    payer.publicKey
  );
  console.log('Using ', tokenToDumpSrcAddress.toBase58(), 'to originate tokenToDump');
  await mintTo(
    connection,
    payer,
    tokenToDumpMintAddress,
    tokenToDumpSrcAddress,
    payer,
    1
  );
  console.log('Minted 1 tokenToDump to ', tokenToDumpSrcAddress.toBase58());

  tokenToDumpDest = await getOrCreateAssociatedTokenAccount(
    connection,
    payer,
    tokenToDumpMintAddress,
    programId,
  )
  console.log('Using PDA ', tokenToDumpDest.address.toBase58(), 'to receive tokenToDump');
}

/**
 * Create trash token mint where authority is PDA of trashpile program
 */
let trashTokenMintAuthorityAddress: PublicKey;
let trashTokenMintAuthorityBumpSeed: number;
let trashTokenMintAddress: PublicKey;
let trashTokenDest: Account;
export async function establishTrashToken(): Promise<void> {
  [trashTokenMintAuthorityAddress, trashTokenMintAuthorityBumpSeed] = await PublicKey.findProgramAddress(
    [Buffer.from("$TRASH")],
    programId
  );

  trashTokenMintAddress = await getOrCreateTrashTokenMintAddress(
    connection,
    payer,
    trashTokenMintAuthorityAddress
  );
  console.log(
    'Using trash token with mint ',
    trashTokenMintAddress.toBase58()
  );
  trashTokenDest = await getOrCreateAssociatedTokenAccount(
    connection,
    payer,
    trashTokenMintAddress,
    payer.publicKey,
  )
  console.log('Using ', trashTokenDest.address.toBase58(), 'to receive trash token')
}

/**
 * Dump tokenToDump, receive trash token in exchange
 */
export async function dumpTokenToDump(): Promise<TransactionSignature> {

  console.log('Forming dump instruction...')
  const keys = [
    {pubkey: tokenToDumpMintAddress, isSigner: false, isWritable: false}, // token_to_dump_mint
    {pubkey: payer.publicKey, isSigner: true, isWritable: false}, // token_to_dump_owner
    {pubkey: tokenToDumpSrcAddress, isSigner: false, isWritable: true}, // token_to_dump_src
    {pubkey: tokenToDumpDest.address, isSigner: false, isWritable: true}, // token_to_dump_dest
    {pubkey: trashTokenMintAddress, isSigner: false, isWritable: true}, // trash_token_mint
    {pubkey: trashTokenMintAuthorityAddress, isSigner: false, isWritable: false}, // trash_token_mint_authority
    {pubkey: trashTokenDest.address, isSigner: false, isWritable: true}, // trash_token_dest
    {pubkey: new PublicKey(TOKEN_PROGRAM_ID), isSigner: false, isWritable: false}, // token_program
  ]

  const dataLayout = BufferLayout.struct<any>([
    BufferLayout.u8('instruction'),
    BufferLayout.nu64('amount'),
  ]);
  const data = Buffer.alloc(dataLayout.span);
  dataLayout.encode(
    {
      instruction: 0, // dump instruction
      amount: 1,
    },
    data,
  );
  
  const ix = new TransactionInstruction({
    programId,
    keys,
    data,
  });

  const tx = new Transaction();
  tx.add(ix);

  console.log('Executing transaction...')
  return await sendAndConfirmTransaction(
    connection,
    tx,
    [payer]
  );
}