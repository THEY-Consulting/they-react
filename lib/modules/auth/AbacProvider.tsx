import React, { createContext, ReactNode, useMemo } from 'react';
import { AppAbility, AppRule } from './types.ts';
import { getAbility } from './abac.ts';

export const AbilityContext = createContext<AppAbility>(getAbility([]));

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
export const AbacProvider: React.FC<Props> = ({ children, rules }) => {
  const abilityContext = useMemo(() => {
    return getAbility(rules);
  }, [rules]);

  return <AbilityContext.Provider value={abilityContext}>{children}</AbilityContext.Provider>;
};
