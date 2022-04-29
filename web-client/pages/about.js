import Head from "next/head";
import Footer from "../components/Footer";
import { Header } from '../components/header/Header';

function About() {
    console.log('made it');
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
}

export default About;