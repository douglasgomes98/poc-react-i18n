import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { messages } from "./messages";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: messages,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
