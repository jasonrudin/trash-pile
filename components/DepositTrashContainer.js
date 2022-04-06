import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import React, { useState, useEffect, useMemo } from "react";
// import { Connection } from '@metaplex/js';
// import { Metadata } from '@metaplex-foundation/mpl-token-metadata';
import { clusterApiUrl, Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import * as bs58 from "bs58";


function DepositTrashContainer() {
    const { wallet, publicKey } = useWallet();
    const { connection } = useConnection();

    if (!publicKey) {
        console.log('all good');
    }
    let balance = 0;

    async function getBalance() {
        if (publicKey) {
            try {
                balance = await connection.getBalance(
                    publicKey,
                    'confirmed'
                );
                balance = balance / LAMPORTS_PER_SOL;
                console.log(balance);
            } catch (e) {
                console.log(`error getting balance: `, e);
            }
        }
    }

    getBalance();

    const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);
    //const connection = new Connection('mainnet-beta');
    //const test = findDataByOwner(connection, base58);
    //const nftsmetadata = Metadata.findDataByOwner(connection, base58);






    // (async () => {
    //   // connection
    //   const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    //   const owner = base58;
    //   let response = await connection.getParsedTokenAccountsByOwner(owner, { programId: TOKEN_PROGRAM_ID });

    //   response.value.forEach((accountInfo) => {
    //     console.log(`pubkey: ${accountInfo.pubkey.toBase58()}`)
    //     console.log(`mint: ${accountInfo.account.data["parsed"]["info"]["mint"]}`);
    //     console.log(`owner: ${accountInfo.account.data["parsed"]["info"]["owner"]}`);
    //     console.log(`decimals: ${accountInfo.account.data["parsed"]["info"]["tokenAmount"]["decimals"]}`);
    //     console.log(`amount: ${accountInfo.account.data["parsed"]["info"]["tokenAmount"]["amount"]}`);
    //     console.log("====================")
    //   });
    // })();

    function displayPublicKey() {
        console.log(base58);
    }

    if (wallet === null) {
        return (
            <div>Nope</div>
        );
    }
    else {

        return (
            <div>
                Yup
                {publicKey?.toBase58()}
            </div>
        );
    }

}

export default DepositTrashContainer;