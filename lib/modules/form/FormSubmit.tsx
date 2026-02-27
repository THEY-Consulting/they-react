import { useEffect } from 'react';
import { FieldValues, useFormState } from 'react-hook-form';
import { Alert, Box, Button, Slide } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SubmitButtonProps } from './types';

type Props = {
  disabled?: boolean;
  hideDirtyNotification?: boolean;
  onCancel?: () => void;
  submitProps?: SubmitButtonProps;
  cancelProps?: SubmitButtonProps;
};

export const FormSubmit = <T extends FieldValues>({
  disabled,
  hideDirtyNotification,
  onCancel,
  submitProps,
  cancelProps,
}: Props) => {
  const { t } = useTranslation();
  const { isDirty, isSubmitting } = useFormState<T>();

  useEffect(() => {
    if (isSubmitting) {
      return;
    }

    const el = document.querySelector('.Mui-error');
    if (!el) {
      return;
    }

    const toggle = el.closest('.MuiCollapse-hidden')?.previousElementSibling as HTMLElement | null;
    if (toggle) {
      toggle.click();

      // wait for collapse animation
      const timeout = setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 500);

      return () => {
        clearTimeout(timeout);
      };
    }

    el.scrollIntoView({ behavior: 'smooth' });
  }, [isSubmitting]);

  return (
    <>
      <Box textAlign="right">
        {!onCancel ? null : (
          <Button
            color="error"
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            onClick={onCancel}
            sx={{ marginRight: 1, ...cancelProps?.sx }}
          >
            {cancelProps?.label ?? t('form.cancel')}
          </Button>
        )}
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={!!disabled || !isDirty || isSubmitting}
          sx={submitProps?.sx}
        >
          {submitProps?.label ?? t('form.save')}
        </Button>
      </Box>
      <Slide direction="up" in={!disabled && isDirty && !hideDirtyNotification} mountOnEnter unmountOnExit>
        <Box
          textAlign="right"
          sx={{
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 0,
            padding: 2,
            textAlign: 'center',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          <Box display="inline-block">
            <Alert
              sx={{ pointerEvents: 'auto' }}
              severity="info"
              action={
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  type="submit"
                  disabled={isSubmitting}
                  sx={{ marginLeft: 1 }}
                >
                  {submitProps?.label ?? t('form.save')}
                </Button>
              }
            >
              {t('form.unsavedChanges')}
            </Alert>
          </Box>
        </Box>
      </Slide>
    </>
  );
};
