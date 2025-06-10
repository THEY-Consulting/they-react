import { FieldPath, FieldValues } from 'react-hook-form';
import { DynamicFormField, FormFieldBase, InputFieldOption } from './types';
import { StringInputField } from './StringInputField';
import { NumberInputField } from './NumberInputField';
import { CurrencyInputField } from './CurrencyInputField';
import { SelectField } from './SelectField';
import { DateField } from './DateField';
import { CheckboxField } from './CheckboxField';
import { MultilineInputField } from './MultilineInputField';
import { ChipSelectField } from './ChipSelectField';
import { ReactNode } from 'react';
import { ButtonField } from './ButtonField';
import { ListField } from './ListField';
import { TimeField } from './TimeField';
import { SelectAutocompleteField } from './SelectAutocompleteField';
import { SelectButtonField } from './SelectButtonField';
import { DividerLabel } from './DividerLabel';
import { AutocompleteOwnerState, AutocompleteRenderOptionState, FilterOptionsState } from '@mui/material';
import { UrlInputField } from './UrlInputField';
import { PasswordInputField } from './PasswordInputField';

type BaseFieldProps<T extends FieldValues> = FormFieldBase<T>;
type Props<T extends FieldValues> =
  | (BaseFieldProps<T> & {
      type: 'boolean' | 'currency' | 'url';
    })
  | (BaseFieldProps<T> & {
      type: 'date' | 'time';
      timezone?: string;
    })
  | (BaseFieldProps<T> & {
      type: 'string';
      clearable?: boolean;
      startAdornment?: ReactNode;
      endAdornment?: ReactNode;
    })
  | (BaseFieldProps<T> & {
      type: 'number';
      startAdornment?: ReactNode;
      endAdornment?: ReactNode;
    })
  | (BaseFieldProps<T> & {
      type: 'password';
    })
  | (BaseFieldProps<T> & {
      type: 'select';
      options?: InputFieldOption<T[FieldPath<T>]>[]; // how can we define our type so that we can set this required here?
      autocomplete?: boolean;
      multiple?: boolean;
      fitContent?: boolean;
      filterOptions?: (
        options: T[FieldPath<T>][],
        state: FilterOptionsState<T[FieldPath<T>]>
      ) => T[FieldPath<T>][];
      renderOption?: (
        props: React.HTMLAttributes<HTMLLIElement> & { key?: string },
        option: T[FieldPath<T>],
        state: AutocompleteRenderOptionState,
        ownerState: AutocompleteOwnerState<T[FieldPath<T>], false, false, false>
      ) => ReactNode;
      startAdornment?: ReactNode;
    })
  | (BaseFieldProps<T> & {
      type: 'chipselect';
      options?: InputFieldOption<T[FieldPath<T>]>[]; // how can we define our type so that we can set this required here?
      startAdornment?: ReactNode;
    })
  | (BaseFieldProps<T> & {
      type: 'buttonselect';
      options?: InputFieldOption<T[FieldPath<T>]>[]; // how can we define our type so that we can set this required here?
      spacing?: number;
    })
  | (BaseFieldProps<T> & {
      type: 'multiline';
      minRows?: number;
      maxRows?: number;
    })
  | (FormFieldBase<T> & {
      type: 'button';
      startIcon?: ReactNode;
    })
  | (FormFieldBase<T> & {
      type: 'divider';
    })
  | (BaseFieldProps<T> & {
      type: 'list';
      fields?: DynamicFormField<T>[]; // how can we define our type so that we can set this required here?
      newEntry?: T[FieldPath<T>];
      getLabel?: (index: number, name: string) => ReactNode;
      marginBottom?: number;
    });

export const RenderInputField = <T extends FieldValues>(props: Props<T>) => {
  const { type, label, name, rules, size, disabled, readonly } = props;
  switch (type) {
    case 'select':
      if (props.autocomplete) {
        return (
          <SelectAutocompleteField
            name={name}
            label={label}
            rules={rules}
            size={size}
            options={props.options!}
            startAdornment={props.startAdornment}
            filterOptions={props.filterOptions}
            renderOption={props.renderOption}
            fitContent={props.fitContent}
            disabled={disabled}
            readonly={readonly}
          />
        );
      }
      return (
        <SelectField
          name={name}
          label={label}
          rules={rules}
          size={size}
          options={props.options!}
          startAdornment={props.startAdornment}
          multiple={props.multiple}
          disabled={disabled}
          readonly={readonly}
        />
      );
    case 'chipselect':
      return (
        <ChipSelectField
          name={name}
          label={label}
          rules={rules}
          size={size}
          options={props.options!}
          startAdornment={props.startAdornment}
          disabled={disabled}
          readonly={readonly}
        />
      );
    case 'buttonselect':
      return (
        <SelectButtonField
          name={name}
          label={label}
          rules={rules}
          size={size}
          spacing={props.spacing}
          options={props.options!}
          disabled={disabled}
          readonly={readonly}
        />
      );
    case 'date':
      return (
        <DateField
          name={name}
          label={label}
          rules={rules}
          size={size}
          disabled={disabled}
          readonly={readonly}
          timezone={props.timezone}
        />
      );
    case 'time':
      return (
        <TimeField
          name={name}
          label={label}
          rules={rules}
          size={size}
          disabled={disabled}
          readonly={readonly}
          timezone={props.timezone}
        />
      );
    case 'boolean':
      return (
        <CheckboxField name={name} label={label} rules={rules} disabled={disabled} readonly={readonly} />
      );
    case 'multiline':
      return (
        <MultilineInputField
          name={name}
          label={label}
          rules={rules}
          size={size}
          minRows={props.minRows}
          maxRows={props.maxRows}
          disabled={disabled}
          readonly={readonly}
        />
      );
    case 'currency':
      return (
        <CurrencyInputField
          name={name}
          label={label}
          rules={rules}
          size={size}
          disabled={disabled}
          readonly={readonly}
        />
      );
    case 'button':
      return (
        <ButtonField
          name={name}
          label={label}
          rules={rules}
          size={size}
          disabled={disabled}
          readonly={readonly}
          startIcon={props.startIcon}
        />
      );
    case 'string':
      return (
        <StringInputField
          name={name}
          label={label}
          rules={rules}
          size={size}
          clearable={props.clearable}
          startAdornment={props.startAdornment}
          endAdornment={props.endAdornment}
          disabled={disabled}
          readonly={readonly}
        />
      );
    case 'number':
      return (
        <NumberInputField
          name={name}
          label={label}
          rules={rules}
          size={size}
          startAdornment={props.startAdornment}
          endAdornment={props.endAdornment}
          disabled={disabled}
          readonly={readonly}
        />
      );
    case 'password':
      return (
        <PasswordInputField
          name={name}
          label={label}
          rules={rules}
          size={size}
          disabled={disabled}
          readonly={readonly}
        />
      );
    case 'url':
      return (
        <UrlInputField
          name={name}
          label={label}
          rules={rules}
          size={size}
          disabled={disabled}
          readonly={readonly}
        />
      );
    case 'divider':
      return <DividerLabel label={label} />;
    case 'list':
      return (
        <ListField
          name={name}
          label={label}
          getLabel={props.getLabel}
          rules={rules}
          size={size}
          fields={props.fields!}
          newEntry={props.newEntry!}
          marginBottom={props.marginBottom}
          disabled={disabled}
          readonly={readonly}
        />
      );
    default:
      throw new Error(`Type "${type}" of field "${name}" is not implemented yet.`);
  }
};
