import React, { useContext } from "react";
import { globalContext } from "./App";

const ChildOne = () => {
  const { number, setNumber } = useContext(globalContext);
  const add = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <p>{number}</p>
      <button onClick={add}>Add</button>
    </div>
  );
};

export default ChildOne;
