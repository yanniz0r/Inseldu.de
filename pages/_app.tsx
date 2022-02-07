import "../styles/globals.css";
import type { AppProps } from "next/app";
import DarkModeSwitch, { Theme } from "../components/dark-mode-switch";
import { useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../locales/i18n";

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
    <I18nextProvider i18n={i18n}>
      <div className={theme}>
        <DarkModeSwitch theme={theme} setTheme={setTheme} />
        <Component {...pageProps} />
      </div>
    </I18nextProvider>
  );
}

export default MyApp;
