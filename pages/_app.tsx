import "../styles/globals.css";
import type { AppProps } from "next/app";
import DarkModeSwitch, { Theme } from "../components/dark-mode-switch";
import { useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../locales/i18n";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<"dark" | "light">();

  return (
    <I18nextProvider i18n={i18n}>
      <>
        <script defer src="https://umami.inselmann.online/script.js" data-website-id="3755d45d-5afa-4d60-bea0-4c55e1e37d5b"></script>
        <script defer data-domain="inseldu.de" src="https://analytics.coolify.inseldu.de/js/script.js"></script>
        <div className={theme}>
          <DarkModeSwitch theme={theme} setTheme={setTheme} />
          <Component {...pageProps} />
        </div>
      </>
    </I18nextProvider>
  );
}

export default MyApp;
