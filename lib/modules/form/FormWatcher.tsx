import { ReactNode, useEffect, useRef } from 'react';
import { FieldValues, UseFormWatch, WatchObserver } from 'react-hook-form';

type Props<T extends FieldValues> = {
  watch: UseFormWatch<T>;
  onChange?: WatchObserver<T>;
};

export const FormWatcher = <T extends FieldValues>({ watch, onChange }: Props<T>): ReactNode => {
  const onChangeStable = useRef(onChange);

  useEffect(() => {
    onChangeStable.current = onChange;
  }, [onChange]);

  useEffect(() => {
    if (onChangeStable?.current === undefined) {
      return;
    }

    const subscription = watch((value, info) => {
      if (info.type === 'change') {
        onChangeStable?.current?.(value, info);
      }
    });

    return subscription.unsubscribe;
  }, [watch]);

  return;
};
