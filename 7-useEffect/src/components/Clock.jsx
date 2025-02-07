import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <h2>Current time: {date.toLocaleTimeString()}</h2>;
}
