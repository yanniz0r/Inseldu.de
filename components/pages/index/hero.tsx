import { FC } from "react";
import { useTranslation } from "react-i18next";
import getTracker from "../../../utils/tracker";
import Button from "../../button";
import Image from "next/image";
import meHeroPicture from "../../../public/me-hero.jpg";
import logoPicture from "../../../public/logo.svg";

const tracker = getTracker()

function trackContactClick() {
  tracker?.trackEvent('hero:contact:click')
}

function trackProjectsClick() {
  tracker?.trackEvent('hero:projects:click')
}

const Hero: FC = () => {
  const { t } = useTranslation("index-page");
  return (
    <div className="relative h-screen lg:grid lg:grid-cols-2">
      <div className="relative z-10 flex h-screen w-full items-center bg-gray-100 bg-opacity-90 dark:bg-slate-800 lg:bg-opacity-100 dark:lg:bg-opacity-100">
        <div className="flex flex-col gap-5 px-10 lg:px-28">
          <Image src={logoPicture} alt="Logo" className="w-56 mx-auto" />
          <small className="text-2xl font-light text-slate-900 dark:text-slate-200">
            {t("hero.hello")}
          </small>
          <div>
            <span className="bg-gradient inline bg-gradient-to-r from-indigo-700 to-emerald-400 box-decoration-clone p-1 text-5xl font-extrabold leading-normal text-white dark:from-indigo-500">
              {t("hero.name")}
            </span>
          </div>
          <p className="text-2xl font-light text-slate-900 dark:text-slate-200">
            {t("hero.what")}
          </p>
          <div className="mt-5 flex gap-5">
            <Button color="primary" variant="outlined" href="https://www.xing.com/profile/Yannic_Inselmann" onClick={trackContactClick}>
              {t("hero.contactCTA")}
            </Button>
            <Button color="primary" variant="solid" href="#projects" onClick={trackProjectsClick}>
              {t("hero.projectsCTA")}
            </Button>
          </div>
        </div>
      </div>
      <div className="relative top-0 left-0 z-0 h-full w-full">
        <Image src={meHeroPicture} alt="Yannic Inselmann" className="absolute w-full h-full left-0 object-cover" />
      </div>
    </div>
  );
};

export default Hero;
