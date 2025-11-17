import React from "react";
import { useState } from "react";
import List from "./List";
import { useCallback } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // const getItem = () => {
  //   return [number + 1, number + 2, number + 3];
  // };
  const getItem = useCallback(
    (incrementor) => {
      return [
        number + incrementor + 1,
        number + incrementor + 2,
        number + incrementor + 3,
      ];
    },
    [number]
  );

  // you can ask why you don't ypu use  useMemo which also does the same job, keep that in mind, useMemo will return a value rather useCallback return a function
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div style={themeStyles}>
      <input
        value={number}
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value))} // parseInt to convert string to number
      />
      <button onClick={() => setDark((curr) => !curr)}>Chnage</button>
      <List getItem={getItem} />
    </div>
  );
};

export default App;
