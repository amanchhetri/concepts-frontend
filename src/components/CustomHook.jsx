import { useState, useEffect } from "react";

function useCounterCustomHook(initialVal, step) {
  const [count, setCount] = useState(initialVal);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + step);
    }, 1000);
    return () => clearInterval(interval);
  }, [step]);

  return count;
}

export default function CustomHook() {
  const abc = useCounterCustomHook(50, 10);

  return <div>{abc}</div>;
}
