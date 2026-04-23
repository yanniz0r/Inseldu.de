import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

interface SocialLinkProps extends PropsWithChildren {
  name: string
  href: string;
  color: string;
}

const SocialLink: FC<SocialLinkProps> = (props) => {
  const linkClassName = classNames(
    "bg-slate-800 p-5 rounded-full hover:outline transition-all"
  );
  return (
    <a
      href={props.href}
      className={linkClassName}
      style={{ color: props.color }}
    >
      {props.children}
    </a>
  );
};

export default SocialLink;
