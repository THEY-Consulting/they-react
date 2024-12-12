import { IconButton, IconButtonProps, SvgIconProps, Tooltip } from '@mui/material';
import { useCopyToClipboard } from './hooks.ts';
import { ContentCopy as ContentCopyIcon } from '@mui/icons-material';

type Props = {
  children?: React.ReactNode;
  value?: string;
  hoverMessage?: string;
  successMessage?: string;
  size?: IconButtonProps['size'];
  fontSize?: SvgIconProps['fontSize'];
};

export const CopyToClipboardIconButton: React.FC<Props> = ({
  children,
  value,
  successMessage,
  hoverMessage,
  size,
  fontSize,
}) => {
  const { copied, handleClick } = useCopyToClipboard(value);

  return (
    <Tooltip disableFocusListener disableTouchListener title={copied ? successMessage : hoverMessage}>
      <span>
        <IconButton onClick={handleClick} disabled={!value} size={size}>
          {children ?? <ContentCopyIcon fontSize={fontSize} />}
        </IconButton>
      </span>
    </Tooltip>
  );
};
