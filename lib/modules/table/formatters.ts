import { TFunction } from 'i18next';

export const formatCurrency = (value: number, t: TFunction): string => {
  return t('format.currency', { value });
};

export const formatDateString = (value: string, t: TFunction) => {
  try {
    return t('format.date', { value: new Date(value) });
  } catch {
    console.error(`Could not format date: ${value}`);
    return '';
  }
};

export const formatTimeString = (value: string, t: TFunction) => {
  try {
    return t('format.time', { value: new Date(value) });
  } catch {
    console.error(`Could not format time: ${value}`);
    return '';
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
