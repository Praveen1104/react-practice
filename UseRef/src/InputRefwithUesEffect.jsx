import React, { useEffect, useRef, useState } from "react";

const InputRefwithUesEffect = () => {
  const [input, setInput] = useState("old");
  const inputRef = useRef();

  useEffect(() => {
    console.log(input);
    console.log("current", inputRef.current);
    inputRef.current = input;
  }, [input]);

  const display = () => {
    console.log(inputRef.current);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <p>normal:{input}</p>
      <p>useRef:{inputRef.current}</p>
      <button onClick={display}>Show1</button>
    </div>
  );
};

export default InputRefwithUesEffect;
