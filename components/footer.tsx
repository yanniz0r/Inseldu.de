import { FC } from "react"
import { FaLinkedin, FaTwitch, FaTwitter, FaXing } from "react-icons/fa"
import SocialLink from "./social-link"

interface FooterProps {
}

const Footer: FC<FooterProps> = (props) => {
  const year = new Date().getFullYear()
  return <div className="px-28 py-14 bg-gradient-to-r from-slate-800 to-slate-700 flex flex-row items-center dark:border-t dark:border-t-slate-600 flex-wrap">
    <div className="w-full md:w-auto">
      <p className="text-slate-200 text-center md:text-left py-5">Yannic Inselmann &middot; {year}</p>
    </div>
    <div className="flex-grow flex items-center justify-center md:justify-end gap-3 w-full md:w-auto">
      <SocialLink color="#1da1f2" href="https://twitter.com/yanniz0r">
        <FaTwitter />
      </SocialLink>
      <SocialLink color="#9146ff" href="https://www.twitch.tv/yanniz0r">
        <FaTwitch />
      </SocialLink>
      <SocialLink color="#026466" href="https://www.xing.com/profile/Yannic_Inselmann">
        <FaXing />
      </SocialLink>
      <SocialLink color="#0077b5" href="https://de.linkedin.com/in/yannic-inselmann-7178a415a">
        <FaLinkedin />
      </SocialLink>
    </div>
  </div>
}

export default Footer
