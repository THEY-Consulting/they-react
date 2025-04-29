import { Path, PathValue } from 'react-hook-form';
import { TableColumnFormatter } from './types';
import { ReactNode } from '../../../node_modules/react';
import { TFunction } from 'i18next';
export declare const getValue: <T, P extends Path<T>>(data: T, path: P) => PathValue<T, P>;
export declare const formatValue: <T, P extends Path<T>>(t: TFunction, row: T, path: P, format: TableColumnFormatter<T, P> | undefined, empty?: ReactNode) => ReactNode;
