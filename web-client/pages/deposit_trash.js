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