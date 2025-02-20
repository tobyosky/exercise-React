import { useState } from "react";

export function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  function increaseCount() {
    setCount((c) => c + 1);
  }

  function decreaseCount() {
    setCount((c) => c - 1);
  }

  function resetCount() {
    setCount(initialValue);
  }

  return { count, increaseCount, decreaseCount, resetCount };
}
