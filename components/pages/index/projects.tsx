import { FC } from "react";
import ProjectCard from "../../project-card";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = (props) => {
  return (
    <div className="min-h-screen border-t border-slate-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-900">
      <div className="p-28">
        <h2 className="text-center text-4xl font-extrabold text-slate-900 dark:text-slate-50">
          Projects
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          <ProjectCard
            title="Partymate"
            type="Backend and Mobile"
            url="https://partymate.party"
            imageURL="/partymate.png"
            imageWidth={600}
            imageHeight={340}
          >
            <p>
              As part of a great team, I got the opportunity to work on the
              mobile app Partymate. It's a social network for party fans -
              definitely worth a try!
            </p>
            <p>
              I've been mostly working on the mobile app, backend and
              infrastructure. Furthermore, I supported other parts of the
              projects to support continuous deployment.
            </p>
          </ProjectCard>
          <ProjectCard
            title="Binckebanck.com"
            type="Blog"
            url="https://binckebanck.com"
            imageWidth={600}
            imageHeight={470}
            imageURL="/binckebanck.png"
          >
            <p>
              A good and reliable project for Lars Binckebanck. This projects
              focused on simple static pages and a blog around the well known
              content management system Wordpress.
            </p>
          </ProjectCard>
          <ProjectCard
            title="Memory Machine"
            type="Frontend"
            url="https://memorymachine.de"
            imageWidth={600}
            imageHeight={350}
            imageURL="/memory-machine.png"
          >
            <p>
              As part of the project "digital memory", AMCHA wanted to find
              digital solutions to provide knowlege about the holocaust. Some
              very talentend game designers and myself created a digital
              experience to learn about the holocaust through the second world
              war.
            </p>
          </ProjectCard>
          <ProjectCard
            title="Sonq"
            type="Fullstack"
            githubURL="https://github.com/yanniz0r/sonq"
            url="https://sonq.de"
            imageURL="/sonq.png"
            imageWidth={600}
            imageHeight={400}
          >
            <p>
              A little song quiz I've been working on in my freetime. It allows
              you to find out whom of your friends can identify the most songs
              by just listening to them.
            </p>
          </ProjectCard>
          <ProjectCard
            title="Reverb Ordermanager"
            type="Fullstack"
            imageURL="/reverb-order-manager.png"
            imageWidth={600}
            imageHeight={400}
          >
            <p>
              I've been requested to improve the shipping process of small German music instrument builder who is selling his products through Reverb.
            </p>
            <p>
              This application fetches orders awaiting shipment from reverb and allows to create a DHL delivery. It also provides presets for customs declaration, package sizes and a history of sent packages.
            </p>
          </ProjectCard>
        </div>
      </div>
    </div>
  );
};

export default Projects;
