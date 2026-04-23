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
      className="fixed bottom-8 left-8 z-20 rounded-full border bg-white bg-opacity-50 p-3 shadow backdrop-blur transition-all hover:text-orange-400 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:hover:text-yellow-200"
      onClick={() => {
        props.setTheme(props.theme === "dark" ? "light" : "dark");
      }}
    >
      {props.theme === "dark" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default DarkModeSwitch;
