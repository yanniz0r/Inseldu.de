import { FC } from "react";
import { FaLinkedin, FaTwitch, FaTwitter, FaXing } from "react-icons/fa";
import SocialLink from "./social-link";

interface FooterProps {}

const Footer: FC<FooterProps> = (props) => {
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-row flex-wrap items-center bg-gradient-to-r from-slate-800 to-slate-700 px-28 py-14 dark:border-t dark:border-t-slate-600">
      <div className="w-full md:w-auto">
        <p className="py-5 text-center text-slate-200 md:text-left">
          Yannic Inselmann &middot; {year}
        </p>
      </div>
      <div className="flex w-full flex-grow items-center justify-center gap-3 md:w-auto md:justify-end">
        <SocialLink name="Twitter" color="#1da1f2" href="https://twitter.com/yanniz0r">
          <FaTwitter />
        </SocialLink>
        <SocialLink name="Twitch" color="#9146ff" href="https://www.twitch.tv/yanniz0r">
          <FaTwitch />
        </SocialLink>
        <SocialLink
          name="Xing"
          color="#026466"
          href="https://www.xing.com/profile/Yannic_Inselmann"
        >
          <FaXing />
        </SocialLink>
        <SocialLink
          name="LinkedIn"
          color="#0077b5"
          href="https://de.linkedin.com/in/yannic-inselmann-7178a415a"
        >
          <FaLinkedin />
        </SocialLink>
      </div>
    </div>
  );
};

export default Footer;
