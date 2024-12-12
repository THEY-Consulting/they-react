import {
  DefaultValues,
  FieldError,
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
  UseControllerProps,
  ValidationRule,
  ValidationValue,
} from 'react-hook-form';
import {
  DynamicFormField,
  ErrorResponse,
  FormGroup,
  InputFieldOption,
  InputFieldOptionGroup,
  InputFieldOptions,
  ValidationError,
} from './types';
import { isObject } from 'lodash';
import { TFunction } from 'i18next';

export const notUndefined = <T>(value: T | undefined): value is T => {
  return value !== undefined;
};

export const getRequiredLabel = (label?: string, required?: boolean, disabled?: boolean) => {
  if (!label) {
    return '';
  }
  return required && !disabled ? `${label} *` : label;
};

export const isFieldWithInitial = <T extends FieldValues>(
  field: DynamicFormField<T>
): field is DynamicFormField<T> & {
  initial: string | number | undefined;
} => {
  return !['button', 'divider'].includes(field.type);
};

export const isOptionGroup = <T>(option: InputFieldOption<T>): option is InputFieldOptionGroup => {
  return (option as InputFieldOptionGroup).group !== undefined;
};

export const getOptionLabel = <T extends FieldValues>(
  options: InputFieldOptions<T>,
  value: string
): string => {
  const option = options.find((option) => !isOptionGroup(option) && option.value === value);
  return (option && !isOptionGroup(option) && option?.label) || value;
};

export const toArrayValue = (value: string | string[]): string[] => {
  return typeof value === 'string' ? value.split(',') : value;
};

export const mapFieldGroups = <T extends FieldValues>(fields: FormGroup<T>[], required?: boolean) => {
  return fields.filter(notUndefined).map((group) => ({
    ...group,
    fields: mapFields(group.fields, group.required, required),
  }));
};

const mapFields = <T extends FieldValues>(
  fields: DynamicFormField<T>[],
  groupRequired?: boolean,
  formRequired?: boolean
) => {
  return fields.map((field) => {
    const mapped = {
      ...field,
      rules: combineRules(field, groupRequired, formRequired),
    };

    if (mapped.type === 'list') {
      mapped.fields = mapFields(mapped.fields, groupRequired, formRequired);

      if (mapped.rules?.required) {
        mapped.rules.validate = {
          required: (value: T[FieldPath<T>][]) => value.length > 0,
          ...mapped.rules.validate,
        };
      }
    }

    return mapped;
  });
};

const combineRules = <T extends FieldValues>(
  field: DynamicFormField<T>,
  groupRequired?: boolean,
  formRequired?: boolean
): DynamicFormField<T>['rules'] => {
  return {
    ...field.rules,
    required: field.required ?? field.rules?.required ?? groupRequired ?? formRequired,
  };
};

export const combineValidation = <T extends FieldValues>(
  rules: DynamicFormField<T>['rules'],
  validations: RegisterOptions<T>['validate']
): DynamicFormField<T>['rules'] => {
  return {
    ...rules,
    validate: {
      ...rules?.validate,
      ...validations,
    },
  };
};

export const isErrorResponse = (response: unknown): response is ErrorResponse => {
  return (response as ErrorResponse)?.details !== undefined;
};

const getRuleValue = <T extends ValidationValue = ValidationValue>(
  rule?: ValidationRule<T>
): T | undefined => {
  if (!rule) {
    return undefined;
  }

  if (!isObject(rule)) {
    return rule;
  }

  if ('value' in rule) {
    return rule.value;
  }

  return undefined;
};

export const getRemainingCharacters = <T extends FieldValues>(
  rules?: UseControllerProps<T>['rules'],
  value?: T[FieldPath<T>]
) => {
  if (rules?.maxLength && value) {
    const maxLength = getRuleValue<number>(rules.maxLength) ?? 0;
    return maxLength - value.length;
  }

  return undefined;
};

export const getErrorMessage = <T extends FieldValues>(
  t: TFunction,
  errors: ValidationError[],
  path: FieldPath<T>,
  error?: FieldError,
  rules?: UseControllerProps<T>['rules']
): string => {
  if (error) {
    switch (error.type) {
      case 'maxLength': {
        const max = getRuleValue<number>(rules?.maxLength);
        return t('form.errors.maxLength', { max });
      }
      case 'minLength': {
        const min = getRuleValue<number>(rules?.minLength);
        return t('form.errors.minLength', { min });
      }
      default: {
        return t(`form.errors.${error.type}`);
      }
    }
  }
  const resolvedDotPath = path.replace(/\.(\d+)\./g, '[$1].');

  return errors.find((detail) => detail.path === resolvedDotPath)?.message ?? '';
};

const getDefaultValueFallback = <T extends FieldValues>(field: DynamicFormField<T>): T[FieldPath<T>] => {
  if (isFieldWithInitial(field)) {
    if (field.type === 'boolean') {
      return (field.initial ?? false) as T[FieldPath<T>];
    }
    if (field.type === 'number') {
      return (field.initial ?? null) as T[FieldPath<T>];
    }
    return (field.initial ?? '') as T[FieldPath<T>];
  } else {
    return undefined as T[FieldPath<T>];
  }
};

const getDefaultFieldValue = <T extends FieldValues>(
  field: DynamicFormField<T>,
  formData?: T
): T[FieldPath<T>] => {
  const value =
    field.name.split('.').reduce((acc, curr) => {
      return acc?.[curr];
    }, formData) ?? getDefaultValueFallback(field);

  return value as T[FieldPath<T>];
};

export const getDefaultValues = <T extends FieldValues>(fields: FormGroup<T>[], formData?: T) => {
  const initial: Partial<Record<Path<T>, string | number>> = {};
  fields.forEach((group) => {
    group.fields.forEach((field) => {
      if (isFieldWithInitial(field)) {
        initial[field.name] = getDefaultFieldValue(field, formData);
      }
    });
  });
  return initial as DefaultValues<T>;
};

export const resolveDotNotation = <T extends FieldValues>(obj: DefaultValues<T>) => {
  const result = {} as DefaultValues<T>;

  for (const [key, value] of Object.entries(obj)) {
    key.split('.').reduce((acc, part, idx, arr) => {
      if (idx === arr.length - 1) {
        acc[part] = value;
      } else {
        acc[part] = acc[part] || {};
      }
      return acc[part];
    }, result);
  }
  return result;
};
