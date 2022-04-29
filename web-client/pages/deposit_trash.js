import Head from "next/head";
import DepositTrashView from "../components/DepositTrashView";
import { Header } from '../components/header/Header';
import { useWallet, useConnection } from "@solana/wallet-adapter-react";

function DepositTrashPage(props) {

  return (
    <div className="bg-gray-200">
      <Head>
        <title>Department of Sanitation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <DepositTrashView />
      <footer className="h-48 bg-gradient-to-t from-black to-gray-700"></footer>
    </div>
  );
}

export default DepositTrashPage;

// export async function getServerSideProps(context) {
//   //const { wallet, publicKey } = useWallet();

//   var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };

//   let response = await fetch("https://api-mainnet.magiceden.dev/v2/wallets/H6K3Auv9EXKC7G2NJJAsEiyztiUsefzo1ZzzSQvBtpa6/tokens", requestOptions);
//   let data = await response.text();
//   let dataJSON = JSON.parse(data);

//   return {
//     props: {
//       raw_string: data,
//       nfts: dataJSON,
//     },
//   }
// }