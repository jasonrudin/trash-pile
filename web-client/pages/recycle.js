import Head from "next/head";
import { Header } from '../components/header/Header';
import RecycleView from "../components/RecycleView";

function Recycle() {
    return (
        <div className="bg-gray-200">
        <Head>
          <title>Department of Sanitation</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <RecycleView/>
        <footer className = "h-48 bg-gradient-to-t from-black to-gray-700"></footer>
      </div>
    );
}

export default Recycle;