import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
//const [value, clear, removeIndex, add] = useArray([]);
export const useArray = <T>(initValue: T[]) => {
  const [value, setValue] = useState(initValue);

  return {
    value,
    setValue,
    clear: () => {
      setValue([]);
    },
    removeIndex: (index: number) => {
      let copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
    add: (item: T) => {
      setValue([...value, item]);
    },
  };
};
