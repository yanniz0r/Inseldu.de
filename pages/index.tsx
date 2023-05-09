import type { NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import Footer from "../components/footer";
import Hero from "../components/pages/index/hero";
import Projects from "../components/pages/index/projects";
import Techstack from "../components/pages/index/techstack";

const Home: NextPage = () => {
  const { t } = useTranslation('index-page') 
  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>
      <Hero />
      <Projects />
      <Techstack />
      <Footer />
    </>
  );
};

export default Home;
