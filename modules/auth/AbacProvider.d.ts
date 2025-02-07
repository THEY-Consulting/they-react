import { default as React, ReactNode } from '../../../node_modules/react';
import { AppAbility, AppRule } from './types.ts';
export declare const AbilityContext: React.Context<AppAbility>;
type Props = {
    rules: AppRule[];
    children: ReactNode;
};
/**
 * This component is used to provide the entire application with access control
 * (Attribute Based Access Control) using the Can component and casl.
 */
export declare const AbacProvider: React.FC<Props>;
export {};
