import React, { useReducer } from "react";

const App = () => {
  const ACTIONS = {
    ADDITION: "add",
    SUBTRACT: "sub",
    MULTIPLY: "multiply",
    DIVIDE: "divide",
  };
  function reducerFunction(state, action) {
    switch (action.type) {
      case ACTIONS.ADDITION:
        return { count: state.count + 1 };
      case ACTIONS.SUBTRACT:
        return { count: state.count - 1 };
      case ACTIONS.MULTIPLY:
        return { count: state.count * 2 };
      case ACTIONS.DIVIDE:
        return { count: state.count / 2 };
    }
  }
  const [state, dispatch] = useReducer(reducerFunction, { count: 1 });
  const add = () => {
    dispatch({ type: ACTIONS.ADDITION });
  };

  const sub = () => {
    dispatch({ type: ACTIONS.SUBTRACT });
  };

  const multi = () => {
    dispatch({ type: ACTIONS.MULTIPLY });
  };

  const divide = () => {
    dispatch({ type: ACTIONS.DIVIDE });
  };
  return (
    <div>
      <div>
        <h1>{state.count}</h1>
      </div>
      <div className="flex">
        <button onClick={add}>ADD</button>
        <button onClick={sub}>SUBTRACT</button>
        <button onClick={multi}>MULTIPLY</button>
        <button onClick={divide}>DIVIDE</button>
      </div>
    </div>
  );
};

export default App;
