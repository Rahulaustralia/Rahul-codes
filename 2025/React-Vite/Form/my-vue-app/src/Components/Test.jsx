import { useRef, useEffect, useState } from "react";

export function Countdown() {
  const [time, setTime] = useState(10);
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(intervalId.current);
  }, []);

  return <h1>Time left: {time}</h1>;
}
