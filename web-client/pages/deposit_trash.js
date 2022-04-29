import DepositTrashView from "../components/DepositTrashView";
import Header from '../components/header/Header';
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import Footer from "../components/Footer";

const DepositTrashPage = props => {

  return (
    <div>
      <Header />
      <DepositTrashView />
      <Footer />
    </div>
  );
}

export default DepositTrashPage;