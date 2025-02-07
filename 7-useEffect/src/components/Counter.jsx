import { useEffect, useState } from "react";

export default function Counter({ initialValue, increment }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log(`actual value of counter is ${counter}`);
  }, [counter]);

  return (
    <div>
      <h2>Value of counter is {counter}</h2>
      <button
        type="button"
        onClick={() => setCounter((value) => value + increment)}
      >
        Increment
      </button>
    </div>
  );
}
