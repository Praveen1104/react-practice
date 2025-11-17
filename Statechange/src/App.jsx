import { useState } from "react";
import State from "./State";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <State />
    </>
  );
}

export default App;
