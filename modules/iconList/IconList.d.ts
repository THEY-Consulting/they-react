import { default as React } from '../../../node_modules/react';
import { IconListTheme, Source } from './types';
type IconListProps = {
    sources: Source[];
    title?: string;
    maxWidth?: number;
    maxHeight?: number;
    theme?: IconListTheme;
};
export declare const IconList: React.FC<IconListProps>;
export {};
