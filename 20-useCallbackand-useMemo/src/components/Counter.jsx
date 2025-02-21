import { useCounter } from "../utils/useCounter";

export default function Counter({ initialValue }) {
  const { count, increaseCount, decreaseCount, resetCount } =
    useCounter(initialValue);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button type="button" onClick={increaseCount}>
        Increase
      </button>
      <button type="button" onClick={decreaseCount}>
        Decrease
      </button>
      <button type="button" onClick={resetCount}>
        Reset
      </button>
    </div>
  );
}
