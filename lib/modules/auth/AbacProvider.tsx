import React, { createContext, ReactNode, useMemo } from 'react';
import { AppAbility, AppRule } from './types.ts';
import { getAbility } from './abac.ts';

export const AbilityContext = createContext<AppAbility>(getAbility([]));

type Props = {
  rules: AppRule[];
  children: ReactNode;
};

/**
 * This component is used to provide the entire application with access control
 * (Attribute Based Access Control) using the Can component and casl.
 */
export const AbacProvider: React.FC<Props> = ({ children, rules }) => {
  const abilityContext = useMemo(() => {
    return getAbility(rules);
  }, [rules]);

  return <AbilityContext.Provider value={abilityContext}>{children}</AbilityContext.Provider>;
};
