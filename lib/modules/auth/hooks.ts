import { useAbility } from '@casl/react';
import { AbilityContext } from './AbacProvider';
import { isAuthSubject } from './abac';
import { useMemo } from 'react';
import { isString } from 'lodash';
import { Action, AuthSubject } from './types.ts';

/**
 * Hook to check if the current user can perform a given action on a given entity.
 * If no action is provided, the hook will always return `true`!
 *
 * @param action The action to check, if not provided, authorization will be skipped
 * @param entity The entity to check against, can be a string or an object with a `__type` property
 */
export const useCan = (action?: Action, entity?: Partial<AuthSubject> | string) => {
  const ability = useAbility(AbilityContext);

  return useMemo(() => {
    // Skip authorization if no action is provided
    if (!action) {
      return true;
    }

    // Deny access if we have an action but no entity to check against
    if (!entity || (!isString(entity) && !isAuthSubject(entity))) {
      return false;
    }

    return ability.can(action, entity);
  }, [ability, action, entity]);
};
