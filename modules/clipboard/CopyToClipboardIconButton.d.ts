import { IconButtonProps, SvgIconProps } from '@mui/material';
type Props = {
    children?: React.ReactNode;
    value?: string;
    hoverMessage?: string;
    successMessage?: string;
    size?: IconButtonProps['size'];
    fontSize?: SvgIconProps['fontSize'];
};
export declare const CopyToClipboardIconButton: React.FC<Props>;
export {};
