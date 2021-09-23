import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import en from '../assets/locales/en/translation.json';
import pt from '../assets/locales/pt/translation.json';

const fallbackLng = ['en'];
const availableLanguages = ['en', 'pt'];

const resources = {
  en: {
    translation: en
  },
  pt: {
    translation: pt
  }
};

const detectionOptions = {
  order: ['path', 'cookie', 'navigator', 'localStorage', 'subdomain', 'queryString', 'htmlTag'],
  lookupFromPathIndex: 0
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    debug: false,
    detection: detectionOptions,
    interpolation: {
      escapeValue: false
    },
    whitelist: availableLanguages
  });

export default i18n;