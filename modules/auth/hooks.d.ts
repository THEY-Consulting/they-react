import { Action, AuthSubject } from './types.ts';
/**
 * Hook to check if the current user can perform a given action on a given entity.
 * If no action is provided, the hook will always return `true`!
 *
 * @param action The action to check, if not provided, authorization will be skipped
 * @param entity The entity to check against, can be a string or an object with a `__type` property
 */
export declare const useCan: (action?: Action, entity?: Partial<AuthSubject> | string) => boolean;
