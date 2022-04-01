import Head from "next/head";
import { Header } from '../components/header/Header';

function ViewDump() {
    console.log('made it');
    return (
        <div className="bg-gray-200">
        <Head>
          <title>Department of Sanitation</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <footer className = "h-48 bg-gradient-to-t from-black to-gray-700"></footer>
      </div>
    );
}

export default ViewDump;