import { useState, useEffect } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((value) => value + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return <div>Count: {count}</div>;
};
