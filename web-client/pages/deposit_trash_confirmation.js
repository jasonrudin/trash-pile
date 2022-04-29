import DepositTrashView from "../components/DepositTrashView";
import Footer from "../components/Footer";
import { Header } from '../components/header/Header';

const DepositTrashConfirmationPage = () => {
    return (
      <div>
        <Header />
        <Link href="/deposit_trash">
            <a>Testing</a>
        </Link>
        <DepositTrashView/>
        <Footer />
      </div>
    );
}

export default DepositTrashConfirmationPage;