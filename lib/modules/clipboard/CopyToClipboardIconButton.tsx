import { IconButton, IconButtonProps, SvgIconProps, Tooltip } from '@mui/material';
import { useCopyToClipboard } from './hooks.ts';
import { ContentCopy as ContentCopyIcon } from '@mui/icons-material';
import { useMemo } from 'react';

type Props = {
  children?: React.ReactNode;
  value?: string | (() => Promise<string> | string);
  hoverMessage?: string;
  progressMessage?: string;
  successMessage?: string;
  size?: IconButtonProps['size'];
  fontSize?: SvgIconProps['fontSize'];
};

export const CopyToClipboardIconButton: React.FC<Props> = ({
  children,
  value,
  successMessage,
  progressMessage,
  hoverMessage,
  size,
  fontSize,
}) => {
  const { copied, inProgress, handleClick } = useCopyToClipboard(value);

  const title = useMemo(() => {
    if (inProgress) {
      return progressMessage;
    }
    return copied ? successMessage : hoverMessage;
  }, [copied, inProgress, successMessage, progressMessage, hoverMessage]);

  return (
    <Tooltip disableFocusListener disableTouchListener title={title}>
      <span style={{ display: 'inline-block' }}>
        <IconButton onClick={handleClick} disabled={!value || inProgress} size={size}>
          {children ?? <ContentCopyIcon fontSize={fontSize} />}
        </IconButton>
      </span>
    </Tooltip>
  );
};
