import { FC, PropsWithChildren } from "react";

interface SectionProps {
  id?: string
}

const Section: FC<PropsWithChildren<SectionProps>> = (props) => {
  return (
    <div className="border-t border-slate-200 bg-gray-50 p-8 dark:border-slate-700 dark:bg-slate-900 md:p-20 lg:p-28" id={props.id}>
      {props.children}
    </div>
  );
};

export default Section;
