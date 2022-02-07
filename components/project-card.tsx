import { FC } from "react"
import Button from "./button"
import { FaGithub, FaLink } from "react-icons/fa"
import Image from "next/image"

interface ProjectCardProps {
  imageURL: string
  imageWidth: number
  imageHeight: number
  type: string
  githubURL?: string
  url?: string
  title: string
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
  return <div className="rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-xl break-inside-avoid-column">
    <Image src={props.imageURL} alt={`${props.title} (${props.type})`} objectFit="cover" height={props.imageHeight} width={props.imageWidth} />
    <div className="p-5 rounded-b-lg">
      <small className="text-indigo-700 dark:text-indigo-400 font-semibold text-xs">{props.type}</small>
      <h3 className="font-bold text-2xl mb-2 dark:text-slate-50">{props.title}</h3>
      <div className="flex-grow text-slate-600 dark:text-slate-400">
        {props.children}
      </div>
      {(props.url || props.githubURL) &&
        <div className="flex mt-5 gap-2">
          {props.url &&
            <Button variant="solid" color="primary" dimension="sm" href={props.url} icon={<FaLink />}>Visit</Button>
          }
          {props.githubURL &&
            <Button variant="solid" color="black" dimension="sm" href={props.githubURL} icon={<FaGithub />}>Code</Button>
          }
        </div>
      }
    </div>
  </div>
}

export default ProjectCard
