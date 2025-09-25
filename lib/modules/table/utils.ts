import { Path, PathValue } from 'react-hook-form';
import { get } from 'lodash';
import { TableColumnFormatter, TableColumns, SortState } from './types';
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

const defaultSortFunction = <T, P extends Path<T>>(a: PathValue<T, P>, b: PathValue<T, P>): number => {
  // Handle null/undefined values
  if (a === null || a === undefined) return b === null || b === undefined ? 0 : 1;
  if (b === null || b === undefined) return -1;

  // Handle string comparison (check if they might be dates first)
  if (typeof a === 'string' && typeof b === 'string') {
    // Try to parse as dates if they look like ISO date strings
    const dateA = new Date(a);
    const dateB = new Date(b);
    if (!isNaN(dateA.getTime()) && !isNaN(dateB.getTime())) {
      return dateA.getTime() - dateB.getTime();
    }
    return a.localeCompare(b);
  }

  // Handle number comparison
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }

  // Handle date comparison
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() - b.getTime();
  }

  // Handle boolean comparison
  if (typeof a === 'boolean' && typeof b === 'boolean') {
    return a === b ? 0 : a ? -1 : 1;
  }

  // Fallback to string comparison
  return String(a).localeCompare(String(b));
};

export const sortData = <T>(data: T[], columns: TableColumns<T>, sortState: SortState<T>): T[] => {
  if (!sortState.column) {
    return data;
  }

  const column = columns.find((col) => col.name === sortState.column);
  if (!column) {
    return data;
  }

  const sortedData = [...data].sort((a, b) => {
    const aValue = getValue(a, sortState.column!);
    const bValue = getValue(b, sortState.column!);

    let result: number;
    if (column.sortFunction) {
      result = column.sortFunction(aValue, bValue, a, b);
    } else {
      result = defaultSortFunction(aValue, bValue);
    }

    return sortState.direction === 'desc' ? -result : result;
  });

  return sortedData;
};
