import { IconButtonProps, SvgIconProps } from '@mui/material';
type Props = {
    children?: React.ReactNode;
    value?: string | (() => Promise<string> | string);
    hoverMessage?: string;
    progressMessage?: string;
    successMessage?: string;
    size?: IconButtonProps['size'];
    fontSize?: SvgIconProps['fontSize'];
};
export declare const CopyToClipboardIconButton: React.FC<Props>;
export {};
