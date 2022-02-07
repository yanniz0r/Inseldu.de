import type { NextPage } from "next";
import Head from "next/head";
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
    </>
  );
};

export default Home;
