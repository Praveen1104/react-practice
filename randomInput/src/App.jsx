import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GuessTheNumber from "./components/GuessTheNumber";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GuessTheNumber />
    </>
  );
}

export default App;
