import Footer from "../components/Footer";
import { Header } from '../components/header/Header';
import RecycleView from "../components/RecycleView";

const Recycle = () => {
    console.log('made it');
    return (
      <div>
        <Header />
        <RecycleView/>
        <Footer />
      </div>
    );
}

export default Recycle;