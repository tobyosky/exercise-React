import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

export default function Counter({ initialValue = 0, increment: amount = 1 }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <CounterDisplay count={count} />
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

/* è meglio utilizzare una funzione anzichè un valore immediato in quanto potremmo non ottenere il valore più recente in caso di aggiornamenti di stati da altri componenti  */
