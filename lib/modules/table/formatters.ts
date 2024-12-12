import { format } from 'date-fns';

export const formatCurrency = (value: number): string => {
  return `${value.toFixed(2)} €`;
};

export const formatDateString = (value: string) => {
  try {
    return format(new Date(value), 'dd.MM.yyyy');
  } catch {
    console.error(`Could not format date: ${value}`);
    return '';
  }
};
export const formatDateTimeString = (value: string) => {
  try {
    const formatted = format(new Date(value), 'dd.MM.yyyy HH:mm');
    return formatted.startsWith('01.01.0001') ? '' : `${formatted} Uhr`;
  } catch {
    console.error(`Could not format date: ${value}`);
    return '';
  }
};
