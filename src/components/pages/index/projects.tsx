import { FC } from "react";
import { useTranslation } from "react-i18next";
import Paragraphs from "../../paragraphs";
import ProjectCard from "../../project-card";
import Section from "../../section";

const Projects: FC = () => {
  const { t } = useTranslation("index-page");
  return (
    <Section id="projects">
      <h2 className="text-center text-4xl font-extrabold text-slate-900 dark:text-slate-50">
        Projects
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        <ProjectCard
          title={t("projects.partymate.title")}
          type={t("projects.partymate.type")}
          url="https://partymate.party"
          imageURL="/partymate.png"
        >
          <Paragraphs text={t("projects.partymate.description")} />
        </ProjectCard>
        <ProjectCard
          title={t("projects.binckebanck.title")}
          type={t("projects.binckebanck.type")}
          url="https://binckebanck.com"
          imageURL="/binckebanck.png"
        >
          <Paragraphs text={t("projects.binckebanck.description")} />
        </ProjectCard>
        <ProjectCard
          title={t("projects.memoryMachine.title")}
          type={t("projects.memoryMachine.type")}
          url="https://memorymachine.de"
          imageURL="/memory-machine.png"
        >
          <Paragraphs text={t("projects.memoryMachine.description")} />
        </ProjectCard>
        <ProjectCard
          title={t("projects.sonq.title")}
          type={t("projects.sonq.type")}
          githubURL="https://github.com/yanniz0r/sonq"
          url="https://sonq.de"
          imageURL="/sonq.png"
        >
          <Paragraphs text={t("projects.sonq.description")} />
        </ProjectCard>
        <ProjectCard
          title={t("projects.reverbOrdermanager.title")}
          type={t("projects.reverbOrdermanager.type")}
          imageURL="/reverb-order-manager.png"
        >
          <Paragraphs text={t("projects.reverbOrdermanager.description")} />
        </ProjectCard>
        <ProjectCard
          title={t("projects.spicyChances.title")}
          type={t("projects.spicyChances.type")}
          imageURL="/spicy-chances.png"
          url="https://spicychances.de"
        >
          <Paragraphs text={t("projects.spicyChances.description")} />
        </ProjectCard>
        <ProjectCard
          title={t("projects.invocraft.title")}
          type={t("projects.invocraft.type")}
          imageURL="/invocraft.png"
          url="https://preview.invocraft.de"
        >
          <Paragraphs text={t("projects.invocraft.description")} />
        </ProjectCard>
      </div>
    </Section>
  );
};

export default Projects;
