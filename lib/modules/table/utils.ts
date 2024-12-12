import { Path, PathValue } from 'react-hook-form';
import { get } from 'lodash';
import { TableColumnFormatter } from './types';
import { ReactNode } from 'react';

export const getValue = <T, P extends Path<T>>(data: T, path: P): PathValue<T, P> => {
  return get<T, P>(data, path) as PathValue<T, P>;
};

export const formatValue = <T, P extends Path<T>>(
  value: PathValue<T, P>,
  format: TableColumnFormatter<T, P> | undefined,
  empty?: ReactNode
): ReactNode => {
  if (value === null || value === undefined) {
    return empty ?? '-';
  }
  return (format ? format(value) : value.toString()) || (empty ?? '-');
};
