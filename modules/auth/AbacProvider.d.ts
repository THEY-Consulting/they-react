import { default as React, ReactNode } from '../../../node_modules/react';
import { AppAbility, AppRule } from './types.ts';
export declare const AbilityContext: React.Context<AppAbility>;
type Props = {
    /** Can be used for passing a mock context when testing. */
    rules: AppRule[];
    children: ReactNode;
};
/**
 * This component is used to provide the entire application with access control
 * (Attribute Based Access Control) using the Can component and casl. This
 * provider has to be nested inside the actual AuthProvider to work as expected.
 */
export declare const AbacProvider: React.FC<Props>;
export {};
