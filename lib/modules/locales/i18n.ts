import { createInstance, i18n } from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en/translation.json';
import deTranslation from './de/translation.json';

export const i18nTheyReact: i18n = createInstance({
  fallbackLng: 'en',
  debug: true,

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
    format: (value, format, lng) => {
      if (format === 'datetime' && value instanceof Date) {
        return value.toLocaleDateString(lng);
      }
      if (format?.startsWith('datetime(') && value instanceof Date) {
        // Simple datetime formatting - could be enhanced with more options
        return value.toLocaleDateString(lng);
      }
      if (format?.startsWith('currency(') && typeof value === 'number') {
        const currency = format.match(/currency\(([^)]+)\)/)?.[1] || 'USD';
        return new Intl.NumberFormat(lng, {
          style: 'currency',
          currency: currency,
        }).format(value);
      }
      return value;
    },
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
