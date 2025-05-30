import { Path, PathValue } from 'react-hook-form';
import { get } from 'lodash';
import { TableColumnFormatter } from './types';
import { ReactNode } from 'react';
import { TFunction } from 'i18next';

export const getValue = <T, P extends Path<T>>(data: T, path: P): PathValue<T, P> => {
  return get<T, P>(data, path) as PathValue<T, P>;
};

export const formatValue = <T, P extends Path<T>>(
  t: TFunction,
  row: T,
  path: P,
  format: TableColumnFormatter<T, P> | undefined,
  empty?: ReactNode
): ReactNode => {
  const value = getValue<T, P>(row, path);
  if (value === null || value === undefined) {
    return empty ?? '-';
  }
  return (format ? format(value, t, row) : value.toString()) || (empty ?? '-');
};
