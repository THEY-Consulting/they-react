export declare const useCopyToClipboard: (value?: string | (() => Promise<string> | string)) => {
    copied: boolean;
    handleClick: () => Promise<void>;
    inProgress: boolean;
};
