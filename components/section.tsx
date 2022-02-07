import { FC } from "react";

interface SectionProps {}

const Section: FC<SectionProps> = (props) => {
  return (
    <div className="border-t border-slate-200 bg-gray-50 p-8 dark:border-slate-700 dark:bg-slate-900 md:p-20 lg:p-28">
      {props.children}
    </div>
  );
};

export default Section;
