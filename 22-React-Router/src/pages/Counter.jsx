import { useState } from "react";

export default function Counter({ initialValue = 0, increment: amount = 1 }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button type="button" onClick={() => setCount((value) => value + amount)}>
        Incrementa
      </button>
      <button type="button" onClick={() => setCount((value) => value - amount)}>
        Decrementa
      </button>
      <button type="button" onClick={() => setCount(initialValue)}>
        Reset
      </button>
    </div>
  );
}
