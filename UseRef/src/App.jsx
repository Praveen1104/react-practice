import React, { useRef } from "react";
import InputRefwithUesEffect from "./inputRefwithUesEffect";

const App = () => {
  const inputRef = useRef();

  const display = () => {
    console.log(inputRef.current?.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <p>{inputRef?.current?.value}</p>{" "}
      {/*optional chaining to check the object
      is existing or not*/}
      <button onClick={display}>Show</button>
      <div className="mt-6">
        <InputRefwithUesEffect />
      </div>
    </div>
  );
};

export default App;
