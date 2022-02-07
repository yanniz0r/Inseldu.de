import { FC } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export type Theme = "light" | "dark";

interface DarkModeSwitchProps {
  setTheme(theme: Theme): void;
  theme?: Theme;
}

const DarkModeSwitch: FC<DarkModeSwitchProps> = (props) => {
  return (
    <button
      className="fixed bottom-8 left-8 bg-white dark:bg-slate-700 shadow bg-opacity-50 backdrop-blur p-3 rounded-full dark:text-white border dark:border-slate-600 hover:text-orange-400 dark:hover:text-yellow-200 z-20 transition-all"
      onClick={() => {
        props.setTheme(props.theme === "dark" ? "light" : "dark");
      }}
    >
      {props.theme === "dark" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default DarkModeSwitch;
