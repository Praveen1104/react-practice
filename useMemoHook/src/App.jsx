import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // const doubleNumber = slowFunction(number);   this will call the slow function every time the component re-renders so this render
  //                                                will re render all the other part in the component which doesnt need to be re-rendered

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // const themeStyles = {
  //   backgroundColor: dark ? "black" : "white",
  //   color: dark ? "white" : "black",
  // };
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  // useEffect(() => {
  //   console.log("theme changed");                every time themeStyles changes or the component re-renders it
  //                                                will cut the old reference and add new refence it may lead to memory leak
  // }, [themeStyles]);
  return (
    <>
      <div className="App">
        <input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <p style={themeStyles}>{doubleNumber}</p>
        <button onClick={() => setDark((curr) => !curr)}>Toggle Button</button>
      </div>
    </>
  );
}

export default App;

function slowFunction(num) {
  console.log("Calling slow function...");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
