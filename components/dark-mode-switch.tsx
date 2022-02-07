import { FC } from "react"
import { FaMoon } from "react-icons/fa"

interface DarkModeSwitchProps {
}

const DarkModeSwitch: FC<DarkModeSwitchProps> = (props) => {
  return <button className="fixed bottom-10 left-10 bg-slate-700 p-3 rounded-full text-white hover:text-yellow-200">
    <FaMoon />
  </button>
}

export default DarkModeSwitch
