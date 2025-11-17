import React, { createContext, useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
export const globalContext = createContext();
const App = () => {
  const [number, setNumber] = useState(0);

  return (
    <globalContext.Provider value={{ number, setNumber }}>
      <ChildOne />
      <ChildTwo />
    </globalContext.Provider>
  );
};

export default App;
