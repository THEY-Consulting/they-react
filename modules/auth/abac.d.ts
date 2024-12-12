import { RawRuleOf } from '@casl/ability';
import { AppAbility, AppRule, AuthSubject } from './types.ts';
export declare const getAbility: (rules: AppRule[]) => AppAbility;
export declare const isAuthSubject: (subject: Partial<AuthSubject>) => subject is AuthSubject;
export declare const getRulesForClaims: (claims: string[]) => (RawRuleOf<AppAbility> | null)[];
