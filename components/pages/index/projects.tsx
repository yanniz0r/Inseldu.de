import { FC } from "react";
import { useTranslation } from "react-i18next";
import Paragraphs from "../../paragraphs";
import ProjectCard from "../../project-card";
import Section from "../../section";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = (props) => {
  const { t } = useTranslation("index-page");
  return (
    <Section id="projects">
      <h2 className="text-center text-4xl font-extrabold text-slate-900 dark:text-slate-50">
        Projects
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          title={t("projects.partymate.title")}
          type={t("projects.partymate.type")}
          url="https://partymate.party"
          imageURL="/partymate.png"
          imageWidth={600}
          imageHeight={340}
        >
          <Paragraphs text={t("projects.partymate.description")} />
        </ProjectCard>
        <ProjectCard
          title={t("projects.binckebanck.title")}
          type={t("projects.binckebanck.type")}
          url="https://binckebanck.com"
          imageWidth={600}
          imageHeight={470}
          imageURL="/binckebanck.png"
        >
          <Paragraphs text={t("projects.binckebanck.description")} />
        </ProjectCard>
        <ProjectCard
          title={t("projects.memoryMachine.title")}
          type={t("projects.memoryMachine.type")}
          url="https://memorymachine.de"
          imageWidth={600}
          imageHeight={350}
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
          imageWidth={600}
          imageHeight={400}
        >
          <Paragraphs text={t("projects.sonq.description")} />
        </ProjectCard>
        <ProjectCard
          title={t("projects.reverbOrdermanager.title")}
          type={t("projects.reverbOrdermanager.type")}
          imageURL="/reverb-order-manager.png"
          imageWidth={600}
          imageHeight={400}
        >
          <Paragraphs text={t("projects.reverbOrdermanager.description")} />
        </ProjectCard>
      </div>
    </Section>
  );
};

export default Projects;
