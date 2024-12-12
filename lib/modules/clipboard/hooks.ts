import { useCallback, useState } from 'react';

export const useCopyToClipboard = (value?: string) => {
  const [copied, setCopied] = useState(false);

  const handleClick = useCallback(async () => {
    if (value) {
      try {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch (error) {
        console.error('Failed to copy to clipboard', error);
      }
    }
  }, [value, setCopied]);

  return { copied, handleClick };
};
