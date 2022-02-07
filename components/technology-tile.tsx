import classNames from "classnames";
import { FC, ReactNode } from "react";

interface TechnologyTileProps {
  color: string;
  icon: ReactNode;
  dark?: boolean;
}

const TechnologyTile: FC<TechnologyTileProps> = (props) => {
  const iconClassName = classNames(
    "h-10 w-10 flex items-center justify-center rounded-full",
    {
      "text-white": props.dark,
    }
  );
  return (
    <div className="inline-flex items-center rounded-full bg-slate-100 outline-double outline-4 outline-offset-4 outline-teal-500 dark:bg-slate-800 dark:outline-teal-400">
      <div className={iconClassName} style={{ backgroundColor: props.color }}>
        {props.icon}
      </div>
      <div className="pl-4 pr-5 text-slate-500 dark:text-slate-300">
        {props.children}
      </div>
    </div>
  );
};

export default TechnologyTile;
