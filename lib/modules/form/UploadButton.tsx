import { Button, FormHelperText } from '@mui/material';
import { FieldValues, useController } from 'react-hook-form';
import { FormFieldBase } from './types';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useError } from './ErrorProvider';
import { getErrorMessage } from './helper';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ELLIPSE_CUTOFF = 20;

const fileToDataUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;
      if (result === null) {
        return reject(new Error('FileReader returned null'));
      }

      resolve(result.toString());
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

type Props<T extends FieldValues> = FormFieldBase<T> & {
  onFileNameChange?: (fileName: string) => void;
  accept?: string;
};

const UploadButton = <T extends FieldValues>({
  name,
  rules,
  disabled,
  accept,
  onFileNameChange,
}: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController<T>({ name, rules });

  const { errors } = useError();
  const { t } = useTranslation();
  const errorMessage = getErrorMessage(t, errors, field.name, error, rules);
  const [fileName, setFileName] = useState<string>();

  // Reset fileName when form resets or field value is cleared
  useEffect(() => {
    if (!field.value) {
      setFileName(undefined);
    }
  }, [field.value]);

  const label = fileName ?? 'Bild Hochladen';
  const ellipsed = !label || label.length <= ELLIPSE_CUTOFF ? label : label.slice(0, ELLIPSE_CUTOFF) + '…';

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file === undefined) {
      return;
    }

    const name = file.name;
    onFileNameChange?.(name);
    setFileName(name);

    const dataUrl = await fileToDataUrl(file);
    field.onChange(dataUrl);
  };

  return (
    <>
      <Button
        fullWidth
        startIcon={<CloudUploadIcon style={{ marginRight: 8, marginBottom: 0, verticalAlign: 'middle' }} />}
        component="label"
        role={undefined}
        variant="contained"
        color="primary"
        tabIndex={-1}
        disabled={disabled}
        sx={{ height: '50px', borderRadius: 2 }}
        style={{
          height: '90%',
          borderRadius: '999px',
        }}
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ellipsed}</span>
        <input hidden type="file" accept={accept} onChange={handleChange} />
      </Button>
      {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </>
  );
};

export default UploadButton;
