import { useEffect } from 'react';
import { FieldValues, useFormState } from 'react-hook-form';
import { Alert, Box, Button, Slide, SxProps, Theme } from '@mui/material';
import { useTranslation } from 'react-i18next';

type Props = {
  disabled?: boolean;
  hideDirtyNotification?: boolean;
  sx?: SxProps<Theme>;
};

export const FormSubmit = <T extends FieldValues>({ disabled, hideDirtyNotification, sx }: Props) => {
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
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={!!disabled || !isDirty || isSubmitting}
          sx={sx}
        >
          {t('form.save')}
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
                  Save
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
