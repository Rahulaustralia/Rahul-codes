import React, { useReducer } from "react";

function reducerFunc(state, action) {
  switch (action.type) {
    case "INC": {
      return state + 1;
    }
    case "DEC": {
      return state - 1;
    }
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducerFunc, 0);

  function handleClickINC() {
    dispatch({ type: "INC" });
  }

  function handleClickDEC() {
    dispatch({ type: "DEC" });
  }
  // ueseReducer
  return (
    <div>
      <div>
        <h1> Count = {state} </h1>
        <button onClick={handleClickINC}>INC</button>
        <button onClick={handleClickDEC} disabled={state === 0}>
          DEC
        </button>
      </div>
    </div>
  );
};

export default Counter;
