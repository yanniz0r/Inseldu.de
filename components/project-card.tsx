import { FC } from "react";
import Button from "./button";
import { FaGithub, FaLink } from "react-icons/fa";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  imageURL: string;
  imageWidth: number;
  imageHeight: number;
  type: string;
  githubURL?: string;
  url?: string;
  title: string;
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { t } = useTranslation("project-card-component");
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-xl dark:bg-slate-800">
      <Image
        src={props.imageURL}
        alt={`${props.title} (${props.type})`}
        objectFit="cover"
        height={props.imageHeight}
        width={props.imageWidth}
      />
      <div className="flex flex-grow flex-col p-5">
        <div className=" flex-grow">
          <small className="text-xs font-semibold text-indigo-700 dark:text-indigo-400">
            {props.type}
          </small>
          <h3 className="mb-2 text-2xl font-bold dark:text-slate-50">
            {props.title}
          </h3>
          <div className="flex-grow text-slate-600 dark:text-slate-400">
            {props.children}
          </div>
        </div>
        {(props.url || props.githubURL) && (
          <div className="mt-5 flex gap-2">
            {props.url && (
              <Button
                variant="solid"
                color="primary"
                dimension="sm"
                href={props.url}
                icon={<FaLink />}
              >
                {t("visit")}
              </Button>
            )}
            {props.githubURL && (
              <Button
                variant="solid"
                color="black"
                dimension="sm"
                href={props.githubURL}
                icon={<FaGithub />}
              >
                {t("code")}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
