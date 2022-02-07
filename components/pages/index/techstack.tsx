import { FC } from "react"
import { FaAws, FaReact, FaVuejs } from "react-icons/fa"
import { SiGo, SiGraphql, SiJava, SiKotlin, SiKubernetes, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiRedis, SiServerless, SiTypescript } from "react-icons/si"
import { MdHttp } from "react-icons/md"
import TechnologyTile from "../../technology-tile"

interface TechstackProps {
}

const Techstack: FC<TechstackProps> = (props) => {
  return <div className="p-28 dark:bg-slate-900 border-t-2 border-slate-100 dark:border-slate-800">
    <h2 className="text-4xl font-extrabold text-slate-900 dark:text-slate-50 text-center">Techstack</h2>
    <p className="text-center text-xl text-slate-500 mt-5">I believe that each problem deserves to be resolved with technology that fits the use case. However, the following tools, frameworks and methodologies proofed themselves as helpful in my past projects. You should see it as a toolbox of technologies the I like to use. I'm always curious to get to know technologies though.</p>
    <div className="mt-14">
      <div className="grid lg:grid-cols-2 gap-10 xl:grid-cols-3 justify-start">
        <div>
          <h3 className="text-slate-500 font-semibold text-xs dark:text-slate-300 uppercase">Languages & Runtimes</h3>
          <div className="flex gap-5 mt-5 flex-wrap">
            <TechnologyTile icon={<SiTypescript />} color="#3178c6" dark>TypeScript</TechnologyTile>
            <TechnologyTile icon={<SiNodedotjs />} color="#6cc24a" dark>Node.js</TechnologyTile>
            <TechnologyTile icon={<SiKotlin />} color="#404044" dark>Kotlin</TechnologyTile>
            <TechnologyTile icon={<SiJava />} color="#f89820" dark>Java</TechnologyTile>
            <TechnologyTile icon={<SiGo />} color="#00ADD8" dark>Go</TechnologyTile>
          </div>
        </div>
        <div>
          <h3 className="text-slate-500 font-semibold text-xs dark:text-slate-300 uppercase">Frontend</h3>
          <div className="flex gap-5 mt-5 flex-wrap">
            <TechnologyTile icon={<FaReact />} color="#00d8ff" dark>React</TechnologyTile>
            <TechnologyTile icon={<FaVuejs />} color="#42b883" dark>Vue</TechnologyTile>
            <TechnologyTile icon={<SiNextdotjs />} color="#fff">Next.js</TechnologyTile>
          </div>
        </div>
        <div>
          <h3 className="text-slate-500 font-semibold text-xs dark:text-slate-300 uppercase">APIs</h3>
          <div className="flex gap-5 mt-5 flex-wrap">
            <TechnologyTile icon={<SiGraphql />} color="#e535ab" dark>GraphQL</TechnologyTile>
            <TechnologyTile icon={<MdHttp />} color="#42b883">REST</TechnologyTile>
          </div>
        </div>
        <div>
          <h3 className="text-slate-500 font-semibold text-xs dark:text-slate-300 uppercase">Operations & Hosting</h3>
          <div className="flex gap-5 mt-5 flex-wrap">
            <TechnologyTile icon={<FaAws />} color="#ff9900" dark>AWS</TechnologyTile>
            <TechnologyTile icon={<SiKubernetes />} color="#047adc" dark>Kubernetes</TechnologyTile>
            <TechnologyTile icon={<SiServerless />} color="#047adc" dark>Serverless</TechnologyTile>
          </div>
        </div>
        <div>
          <h3 className="text-slate-500 font-semibold text-xs dark:text-slate-300 uppercase">Databases</h3>
          <div className="flex gap-5 mt-5 flex-wrap">
            <TechnologyTile icon={<SiMongodb />} color="#589636" dark>MongoDB</TechnologyTile>
            <TechnologyTile icon={<SiPostgresql />} color="#0064a5" dark>Postgres</TechnologyTile>
            <TechnologyTile icon={<SiMysql />} color="#e535ab" dark>MySQL</TechnologyTile>
            <TechnologyTile icon={<SiRedis />} color="#589636" dark>Redis</TechnologyTile>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Techstack
