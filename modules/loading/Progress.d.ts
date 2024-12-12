import { default as React } from '../../../node_modules/react';
type Props = {
    loading?: boolean;
    children?: React.ReactNode;
    variant?: 'circular' | 'linear';
    size?: number;
    skipTransitionDelay?: boolean;
};
export declare const Progress: React.FC<Props>;
export {};
