import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import Contact from "../components/pages/index/contact";
import Hero from "../components/pages/index/hero";
import Projects from "../components/pages/index/projects";
import Techstack from "../components/pages/index/techstack";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yannic Inselmann</title>
      </Head>
      <Hero />
      <Projects />
      <Techstack />
      {/* {<Contact />} */}
      <Footer />
    </>
  );
};

export default Home;
