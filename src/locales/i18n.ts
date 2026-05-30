import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enPages from "./en/pages.json";
import enComponents from "./en/components.json";
import dePages from "./de/pages.json";
import deComponents from "./de/components.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      ...enComponents,
      ...enPages,
    },
    de: {
      ...deComponents,
      ...dePages,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
