import {
  establishConnection,
  establishPayer,
  checkProgram,
  establishTrashToken,
  establishTokenToDump,
  dumpTokenToDump,
} from './tests';

async function main() {
  console.log("Let's say hello to a Solana account...");

  // Establish connection to the cluster
  await establishConnection();

  // Determine who pays for the fees
  await establishPayer();

  // Check if the program has been deployed
  await checkProgram();

  // Establish token to be dumped into trashpile
  await establishTokenToDump();

  // Establish trash token owned by program
  await establishTrashToken();

  // Dump token, receive trash token in exchange
  await dumpTokenToDump();

  console.log('Success');
}

main().then(
  () => process.exit(),
  err => {
    console.error(err);
    process.exit(-1);
  },
);
  