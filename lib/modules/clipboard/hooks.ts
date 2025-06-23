import { useCallback, useState } from 'react';

export const useCopyToClipboard = (value?: string | (() => Promise<string> | string)) => {
  const [copied, setCopied] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const handleClick = useCallback(async () => {
    if (value) {
      setInProgress(true);
      // If value is a function, call it to get the string to copy
      const textToCopy = typeof value === 'function' ? await value() : value;
      try {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch (error) {
        console.error('Failed to copy to clipboard', error);
      }
      setInProgress(false);
    }
  }, [value]);

  return { copied, handleClick, inProgress };
};
