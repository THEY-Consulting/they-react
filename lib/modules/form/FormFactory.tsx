import { SubmitButtonProps, FormGroup } from './types';
import { DefaultValues, FieldValues, FormProvider, useForm, WatchObserver } from 'react-hook-form';
import {
  getDefaultValues,
  getErrorMessage,
  isErrorResponse,
  mapFieldGroups,
  resolveDotNotation,
} from './helper';
import { useEffect, useMemo } from 'react';
import { useSnackbar } from 'notistack';
import { debounce, isArray, mergeWith } from 'lodash';
import { FormWatcher } from './FormWatcher';
import { AccordionGroup } from './AccordionGroup';
import { DefaultGroup } from './DefaultGroup';
import { Action, AuthSubject } from '../auth/types';
import { FormSubmit } from './FormSubmit';
import { Auditable } from '../audit/types';
import { FormMetadata } from './FormMetaData';
import { Box, Typography } from '@mui/material';
import { useCan } from '../auth/hooks';
import { ErrorProvider, useError } from './ErrorProvider';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { i18nTheyReact } from '../locales/i18n.ts';

type Props<T extends FieldValues | Partial<AuthSubject>> = {
  formData?: T;
  defaultValues?: DefaultValues<T>;
  fields: FormGroup<T>[];
  onSubmit?: (data: T) => void | Promise<void> | T | Promise<T>;
  onChange?: WatchObserver<T>;
  onCancel?: () => void;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  controlled?: boolean;
  displayContents?: boolean;
  action?: Action;
  hideDirtyNotification?: boolean;
  submitProps?: SubmitButtonProps;
  cancelProps?: SubmitButtonProps;
};

const displayContentsSx = { display: 'contents' };

const InnerFormFactory = <T extends FieldValues & Partial<AuthSubject> & Auditable>({
  formData,
  defaultValues: controlledDefaultValues,
  fields,
  onSubmit,
  onChange,
  required,
  disabled,
  readonly,
  controlled,
  displayContents,
  action,
  hideDirtyNotification,
  submitProps,
  cancelProps,
  onCancel,
}: Props<T>) => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const mappedFields: FormGroup<T>[] = useMemo(() => mapFieldGroups(fields, required), [fields, required]);
  const displayContentsStyle = displayContents ? displayContentsSx : undefined;
  const debouncedOnChange = useMemo(() => onChange && debounce(onChange, 250), [onChange]);
  const allowed = useCan(action, formData) && !readonly;
  const { errors, setErrors } = useError();
  const errorMessage = getErrorMessage(t, errors, '.');

  const defaultValues = useMemo(() => {
    return controlled
      ? (formData as DefaultValues<T>)
      : resolveDotNotation(getDefaultValues(fields, formData));
  }, [fields, formData, controlled]);

  const form = useForm<T>(
    controlled
      ? {
          values: formData,
          defaultValues: controlledDefaultValues,
          resetOptions: {
            // we need to keep the default values to be able to calculate which fields are dirty
            keepDefaultValues: true,

            // causes conflict when forms are externally controlled if set to true!
            keepDirtyValues: false,
          },
        }
      : {
          defaultValues,
          resetOptions: {
            // required to prevent resetting all form fields internally,
            // otherwise we could lose input events during slow re-renders
            keepDirtyValues: true,
          },
        }
  );

  useEffect(() => {
    if (controlled) {
      form.reset(formData);
    }
  }, [controlled, formData, form.reset]);

  const handleSubmit = async (data: T) => {
    if (!onSubmit || !allowed) {
      return;
    }

    try {
      // The form data does not necessarily contain all fields, so we need to merge it with the default entity values
      // to ensure that all fields are present in the data that is submitted.
      // We want to merge the data recursively, except for arrays, which should be overwritten.
      const values = mergeWith({}, formData, data, (_, srcValue) => {
        if (isArray(srcValue)) {
          return srcValue;
        }
      });
      const modified = await onSubmit(values);
      form.reset(modified ?? data);
      enqueueSnackbar(t('form.submit.success'), { variant: 'success' });
      setErrors([]);
    } catch (error) {
      if (isErrorResponse(error)) {
        if (isArray(error.details)) {
          setErrors(error.details);
        } else {
          setErrors([
            {
              path: '.',
              field: '',
              message: error.message,
            },
          ]);
          enqueueSnackbar(error.message, { variant: 'error' });
        }
      } else {
        setErrors([]);
        enqueueSnackbar(t('form.submit.error'), { variant: 'error' });
      }
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} style={displayContentsStyle}>
        <FormWatcher watch={form.watch} onChange={controlled ? debouncedOnChange : onChange} />
        {mappedFields.map((group) =>
          group.accordion ? (
            <AccordionGroup
              key={group.fields[0]?.name ?? group.label}
              group={group}
              disabled={disabled}
              readonly={!allowed}
            />
          ) : (
            <DefaultGroup
              key={group.fields[0]?.name ?? group.label}
              group={group}
              disabled={disabled}
              readonly={!allowed}
              sx={displayContentsStyle}
            />
          )
        )}
        {errorMessage && <Typography color="error">{errorMessage}</Typography>}
        {onSubmit && allowed && (
          <FormSubmit 
            disabled={disabled}
            onCancel={onCancel} 
            hideDirtyNotification={hideDirtyNotification} 
            submitProps={submitProps} 
            cancelProps={cancelProps} 
          />
        )}
        {((formData?.createdAt && formData?.createdBy) || (formData?.editedAt && formData?.editedBy)) && (
          <Box mt={2} textAlign="right">
            <FormMetadata
              createdBy={formData.createdBy}
              createdAt={formData.createdAt}
              editedBy={formData.editedBy}
              editedAt={formData.editedAt}
            />
          </Box>
        )}
      </form>
    </FormProvider>
  );
};

export const FormFactory = <T extends FieldValues & Partial<AuthSubject> & Auditable>(props: Props<T>) => {
  // not pretty but it does the job for now
  return (
    <I18nextProvider i18n={i18nTheyReact}>
      <ErrorProvider>
        <InnerFormFactory {...props} />
      </ErrorProvider>
    </I18nextProvider>
  );
};
