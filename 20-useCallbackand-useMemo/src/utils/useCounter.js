import { useCallback, useState } from "react";

export function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const decreaseCount = useCallback(() => {
    setCount((c) => c - 1);
  }, []);

  const resetCount = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increaseCount, decreaseCount, resetCount };
}
