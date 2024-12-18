import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en/translation.json';
import deTranslation from './de/translation.json';

export const i18nTheyReact = createInstance({
  fallbackLng: 'en',
  debug: true,

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },

  resources: {
    en: {
      translation: enTranslation,
    },
    de: {
      translation: deTranslation,
    },
  },
});

i18nTheyReact.use(initReactI18next).init();
