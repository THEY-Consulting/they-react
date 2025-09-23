import { TFunction } from 'i18next';

export const formatCurrency = (value: number, t: TFunction): string => {
  return t('format.currency', { value });
};

export const formatDateString = (value: string, t: TFunction) => {
  try {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      console.error(`Invalid date string: ${value}`);
      return value; // Return original value if invalid
    }
    return t('format.date', { date });
  } catch (error) {
    console.error(`Could not format date: ${value}`, error);
    return value; // Return original value on error
  }
};

export const formatTimeString = (value: string, t: TFunction) => {
  try {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      console.error(`Invalid time string: ${value}`);
      return value;
    }
    return t('format.time', { date });
  } catch (error) {
    console.error(`Could not format time: ${value}`, error);
    return value;
  }
};

export const formatDateTimeString = (value: string, t: TFunction) => {
  try {
    const formatted = t('format.dateTime', { date: new Date(value) });
    return formatted.startsWith('01.01.0001') ? '' : formatted;
  } catch {
    console.error(`Could not format date: ${value}`);
    return '';
  }
};
