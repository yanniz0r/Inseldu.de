import { FC } from "react";
import { FaAws, FaReact, FaVuejs, FaJava } from "react-icons/fa";
import {
  SiGo,
  SiGraphql,
  SiKotlin,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiServerless,
  SiTypescript,
} from "react-icons/si";
import { MdHttp } from "react-icons/md";
import TechnologyTile from "../../technology-tile";
import Section from "../../section";
import { useTranslation } from "react-i18next";

const Techstack: FC = () => {
  const { t } = useTranslation("index-page");
  return (
    <Section>
      <h2 className="text-center text-4xl font-extrabold text-slate-900 dark:text-slate-50">
        {t("techstack.title")}
      </h2>
      <p className="mt-5 text-center text-xl text-slate-500">
        {t("techstack.description")}
      </p>
      <div className="mt-14">
        <div className="grid justify-start gap-10 lg:grid-cols-2 xl:grid-cols-3">
          <div>
            <h3 className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-300">
              {t("techstack.categories.languagesAndRuntimes")}
            </h3>
            <div className="mt-5 flex flex-wrap gap-5">
              <TechnologyTile icon={<SiTypescript />} color="#3178c6" dark>
                TypeScript
              </TechnologyTile>
              <TechnologyTile icon={<SiNodedotjs />} color="#6cc24a" dark>
                Node.js
              </TechnologyTile>
              <TechnologyTile icon={<SiKotlin />} color="#404044" dark>
                Kotlin
              </TechnologyTile>
              <TechnologyTile icon={<FaJava />} color="#f89820" dark>
                Java
              </TechnologyTile>
              <TechnologyTile icon={<SiGo />} color="#00ADD8" dark>
                Go
              </TechnologyTile>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-300">
              {t("techstack.categories.frontend")}
            </h3>
            <div className="mt-5 flex flex-wrap gap-5">
              <TechnologyTile icon={<FaReact />} color="#00d8ff" dark>
                React (Web & Native)
              </TechnologyTile>
              <TechnologyTile icon={<FaVuejs />} color="#42b883" dark>
                Vue
              </TechnologyTile>
              <TechnologyTile icon={<SiNextdotjs />} color="#fff">
                Next.js
              </TechnologyTile>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-300">
              {t("techstack.categories.APIs")}
            </h3>
            <div className="mt-5 flex flex-wrap gap-5">
              <TechnologyTile icon={<SiGraphql />} color="#e535ab" dark>
                GraphQL
              </TechnologyTile>
              <TechnologyTile icon={<MdHttp />} color="#42b883">
                REST
              </TechnologyTile>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-300">
              {t("techstack.categories.operationsAndHosting")}
            </h3>
            <div className="mt-5 flex flex-wrap gap-5">
              <TechnologyTile icon={<FaAws />} color="#ff9900" dark>
                AWS
              </TechnologyTile>
              <TechnologyTile icon={<SiKubernetes />} color="#047adc" dark>
                Kubernetes
              </TechnologyTile>
              <TechnologyTile icon={<SiServerless />} color="#047adc" dark>
                Serverless
              </TechnologyTile>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-300">
              {t("techstack.categories.databases")}
            </h3>
            <div className="mt-5 flex flex-wrap gap-5">
              <TechnologyTile icon={<SiMongodb />} color="#589636" dark>
                MongoDB
              </TechnologyTile>
              <TechnologyTile icon={<SiPostgresql />} color="#0064a5" dark>
                Postgres
              </TechnologyTile>
              <TechnologyTile icon={<SiMysql />} color="#e535ab" dark>
                MySQL
              </TechnologyTile>
              <TechnologyTile icon={<SiRedis />} color="#589636" dark>
                Redis
              </TechnologyTile>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Techstack;
