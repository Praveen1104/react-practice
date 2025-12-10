import "./styles.css";
import { useState } from "react";
import usePrevious from "./usePrevious";

export default function Counter() {
  const [count, setCount] = useState(0);

  const previousCount = usePrevious(count);
  const increase = () => {
    setCount((pre) => pre + 1);
  };

  const decrease = () => {
    setCount((pre) => pre - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h2>Current Count: {count}</h2>
      <h2>Previous Count: {previousCount}</h2>
      <button onClick={decrease}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increase}>Increment</button>
    </div>
  );
}
