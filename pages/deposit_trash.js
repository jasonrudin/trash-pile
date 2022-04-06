import Head from "next/head";
import DepositTrashContainer from "../components/DepositTrashContainer";
import { Header } from '../components/header/Header';

function DepositTrashPage() {
    return (
        <div className="bg-gray-200">
        <Head>
          <title>Department of Sanitation</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <DepositTrashContainer/>
        <footer className = "h-48 bg-gradient-to-t from-black to-gray-700"></footer>
      </div>
    );
}

export default DepositTrashPage;