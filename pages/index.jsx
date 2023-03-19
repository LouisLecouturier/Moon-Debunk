import Head from "next/head";

import Header from "../components/Shared/Header/Header";

import Story from "../components/Home/Story/Story";
import Theory from "../components/Home/Theory/Theory";
import Manipulation from "../components/Home/Manipulation/Manipulation";
import Debunk from "../components/Home/Debunk/Debunk";
import Hero from "../components/Shared/Hero/Hero";
import { useEffect } from "react";
import Footer from "../components/Shared/Footer/Footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Moon Debunk</title>
      </Head>

      <Header />
      <div className="page">
        <Hero title1="Yes," title2="We've been there" page="index" />
        <Story />
        <Theory />
        <Debunk />
        <Manipulation />
        <Footer />
      </div>
    </>
  );
}
