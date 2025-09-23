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
      // Date/time formatting: {{date, datetime(...)}}
      if ((format === 'datetime' || format?.startsWith('datetime(')) && value instanceof Date) {
        // Parse options inside datetime(...)
        const options: Intl.DateTimeFormatOptions = {};
        const match = format?.match(/datetime\((.*)\)/);
        if (match?.[1]) {
          // Example: "year: numeric; month: numeric; day: numeric; hour: numeric; minute: numeric"
          match[1]
            .split(';')
            .map((s) => s.trim())
            .filter(Boolean)
            .forEach((pair) => {
              const [k, v] = pair.split(':').map((s) => s.trim());
              if (!k || !v) return;
              // Map to valid Intl options
              const key = k as keyof Intl.DateTimeFormatOptions;
              const val = v.replace(/,$/, '') as any;
              (options as any)[key] = val;
            });
        }
        // If no options given, default to date+time
        const hasAny = Object.keys(options).length > 0;
        const fmt = new Intl.DateTimeFormat(lng, hasAny ? options : { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' });
        return fmt.format(value);
      }

      // Currency formatting: {{value, currency(USD)}}
      if (format?.startsWith('currency(') && typeof value === 'number') {
        const currency = format.match(/currency\(([^)]+)\)/)?.[1] || 'USD';
        return new Intl.NumberFormat(lng, {
          style: 'currency',
          currency,
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
