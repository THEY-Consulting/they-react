import { createContextualCan } from '@casl/react';
import { AbilityContext } from './AbacProvider';

// src: https://casl.js.org/v6/en/package/casl-react#can-component
export const Can = createContextualCan(AbilityContext.Consumer);
