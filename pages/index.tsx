import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/button'
import ProjectCard from '../components/project-card'

const Home: NextPage = () => {
  return <>
    <Head>
      <title>Yannic Inselmann</title>
    </Head>
    <div className="min-h-screen grid grid-cols-2">
      <div className="flex items-center bg-gray-100 dark:bg-slate-800">
        <div className="flex flex-col gap-5 px-10 lg:px-28">
          <small className="text-2xl font-light text-slate-900 dark:text-slate-200">Hello, my name is</small>
          <div>
            <span className="text-5xl inline font-extrabold bg-gradient bg-gradient-to-r from-indigo-700 dark:from-indigo-500 to-emerald-400 leading-normal box-decoration-clone text-white p-1">Yannic Inselmann</span>
          </div>
          <p className="text-2xl font-light text-slate-900 dark:text-slate-200">I'm lead software developer @ Whiskey Tango Foxtrot, Freelancer and always curious for challenging sideprojects.</p>
          <div className="flex mt-5 gap-5">
            <Button color="primary" variant="outlined">Get in contact</Button>
            <Button color="primary" variant="solid" href="">Check out Projects</Button>
          </div>
        </div>
      </div>
      <div className="bg-center bg-cover" style={{ backgroundImage: 'url(/me-hero.jpeg)' }} />
    </div>
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="p-28">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-slate-50 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10">
          <ProjectCard title="Partymate" type="Backend and Mobile" url="https://partymate.party" imageURL="/partymate.png" imageWidth={600} imageHeight={340}>
            <p>As part of a great team, I got the opportunity to work on the mobile app Partymate. It's a social network for party fans - definitely worth a try!</p>
            <p>I've been mostly working on the mobile app, backend and infrastructure. Furthermore, I supported other parts of the projects to support continuous deployment.</p>
          </ProjectCard>
          <ProjectCard title="Binckebanck.com" type="Blog" url="https://binckebanck.com" imageWidth={600} imageHeight={470} imageURL="/binckebanck.png">
            <p>A good and reliable project for Lars Binckebanck. This projects focused on simple static pages and a blog around the well known content management system Wordpress.</p>
          </ProjectCard>
          <ProjectCard title="Memory Machine" type="Frontend" url="https://memorymachine.de" imageWidth={600} imageHeight={350} imageURL="/memory-machine.png">
            <p>As part of the project "digital memory", AMCHA wanted to find digital solutions to provide knowlege about the holocaust. Some very talentend game designers and myself created a digital experience to learn about the holocaust through the second world war.</p>
          </ProjectCard>
          <ProjectCard title="Sonq" type="Fullstack" githubURL="https://github.com/yanniz0r/sonq" url="https://sonq.de" imageURL="/sonq.png" imageWidth={600} imageHeight={400}>
            <p>A little song quiz I've been working on in my freetime. It allows you to find out whom of your friends can identify the most songs by just listening to them.</p>
          </ProjectCard>
        </div>
      </div>
    </div>
  </>
}

export default Home
