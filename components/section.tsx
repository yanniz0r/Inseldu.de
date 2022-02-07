import { FC } from "react"

interface SectionProps {
}

const Section: FC<SectionProps> = (props) => {
  return <div className="p-8 md:p-20 lg:p-28 border-t border-slate-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-900">
    {props.children}
  </div>
}

export default Section
