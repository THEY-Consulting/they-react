import { useCallback, useMemo, useState } from 'react';

export const useFieldFocus = (onBlur: () => void) => {
  const [focus, setFocus] = useState(false);

  const onFocus = useCallback(() => setFocus(true), [setFocus]);
  const onBlurWrapped = useCallback(() => {
    setFocus(false);
    onBlur();
  }, [setFocus, onBlur]);

  const callbacks = useMemo(() => ({ onFocus, onBlur: onBlurWrapped }), [onFocus, onBlurWrapped]);

  return { focus, focusCallbacks: callbacks };
};
