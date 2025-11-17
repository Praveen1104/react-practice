import React, { useContext } from "react";
import { globalContext } from "./App";

const ChildTwo = () => {
  const { number, setNumber } = useContext(globalContext);
  return (
    <div>
      <p>{number}</p>
    </div>
  );
};

export default ChildTwo;
