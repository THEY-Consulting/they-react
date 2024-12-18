import { Path, PathValue } from 'react-hook-form';
import { ReactNode } from '../../../node_modules/react';
import { TFunction } from 'i18next';
export type TableColumnFormatter<T, P extends Path<T>> = (value: NonNullable<PathValue<T, P>>, t: TFunction) => ReactNode;
export type TableColumn<T, P extends Path<T>> = {
    key?: string;
    name: P;
    label: ReactNode;
    minWidth?: number;
    align?: 'left' | 'right' | 'center';
    format?: TableColumnFormatter<T, P>;
    empty?: ReactNode;
};
export type TableColumns<T> = {
    [K in Path<T>]: TableColumn<T, K>;
}[Path<T>][];
