import { FC } from "react"
import Button from "../../button"

interface HeroProps {
}

const Hero: FC<HeroProps> = (props) => {
  return <div className="h-screen lg:grid lg:grid-cols-2 relative">
    <div className="flex h-screen items-center bg-gray-100 dark:bg-slate-800 w-full dark:bg-opacity-90 bg-opacity-50 dark:lg:bg-opacity-100 lg:bg-opacity-100 relative z-10">
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
    <div className="lg:static bg-center bg-cover lg:bg-cover absolute top-0 left-0 h-full w-full z-0 bg-fixed lg:bg-local" style={{ backgroundImage: 'url(/me-hero.jpeg)' }} />
  </div>
}

export default Hero
