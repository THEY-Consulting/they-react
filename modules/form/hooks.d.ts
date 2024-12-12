export declare const useFieldFocus: (onBlur: () => void) => {
    focus: boolean;
    focusCallbacks: {
        onFocus: () => void;
        onBlur: () => void;
    };
};
