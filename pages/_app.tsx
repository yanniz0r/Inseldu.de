import "../styles/globals.css";
import type { AppProps } from "next/app";
import DarkModeSwitch, { Theme } from "../components/dark-mode-switch";
import { useState } from "react";

function getTheme(): Theme {
  if (typeof window === "undefined") return "light";
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    return "dark";
  } else {
    return "light";
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<"dark" | "light">();

  return (
    <div className={theme}>
      <DarkModeSwitch theme={theme} setTheme={setTheme} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
