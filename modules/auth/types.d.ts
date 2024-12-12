import { MongoAbility, RawRuleOf } from '@casl/ability';
export declare const validActions: readonly ["read", "create", "update", "delete", "manage"];
export type Action = (typeof validActions)[number];
export type AuthSubject = {
    __type: string;
};
export type AppAbility = MongoAbility<[Action, AuthSubject | string], {
    [key in string]: unknown;
}>;
export type AppRule = RawRuleOf<AppAbility> | null | undefined;
