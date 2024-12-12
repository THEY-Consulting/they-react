import { createMongoAbility, RawRuleOf } from '@casl/ability';
import { Action, AppAbility, AppRule, AuthSubject, validActions } from './types.ts';

export const getAbility = (rules: AppRule[]): AppAbility => {
  const filtered = rules
    // Using in-line user defined type guard to tell typescript that we filter out null values
    .filter((ability): ability is RawRuleOf<AppAbility> => ability !== null);
  return createMongoAbility<AppAbility>(filtered, { detectSubjectType: (subject) => subject.__type });
};

export const isAuthSubject = (subject: Partial<AuthSubject>): subject is AuthSubject => {
  return subject.__type !== undefined;
};

export const getRulesForClaims = (claims: string[]): (RawRuleOf<AppAbility> | null)[] => {
  return claims.map((claim) => {
    const [subject, action, unparsedRawConditions] = claim.split('.');

    if (!isValidAction(action)) {
      return null;
    }

    if (!unparsedRawConditions) {
      return { subject, action };
    }

    try {
      const parsedConditions = parseConditions(unparsedRawConditions);
      return { subject, action, conditions: parsedConditions };
    } catch (error) {
      // TODO: log to sentry
      console.log('Error parsing conditions: ', error);
      return null;
    }
  });
};

const isValidAction = (x: string): x is Action => {
  const matchingAction = validActions.find((action) => action === x);
  return matchingAction !== undefined;
};

const parseConditions = (unparsedConditions: string): Record<string, unknown> => {
  // JSON spec expects " around attributes, azure only allows using '.
  // Therefore, we have to replace ' with " to end up with a valid JSON encoded
  // object.
  const withQuotes = unparsedConditions.replaceAll("'", '"');
  return JSON.parse(withQuotes);
};
