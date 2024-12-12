import { MongoAbility, RawRuleOf } from '@casl/ability';

export const validActions = [
  'read',
  'create',
  'update',
  'delete',
  'manage', // must be lowercase, see https://casl.js.org/v6/en/guide/intro#basics
] as const;
export type Action = (typeof validActions)[number];

export type AuthSubject = { __type: string };

export type AppAbility = MongoAbility<[Action, AuthSubject | string], { [key in string]: unknown }>;

export type AppRule = RawRuleOf<AppAbility> | null | undefined;
