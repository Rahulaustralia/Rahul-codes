import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;

    default:
      return state;
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, 1);

  function handleInc() {
    dispatch({ type: "INC" });
  }

  function handleDec() {
    dispatch({ type: "DEC" });
  }

  return (
    <>
      <div>
        <h1> Counter using useReducer </h1>
        <h2> Count = {state} </h2>
        <button className="btn btn-success" onClick={handleInc}>
          Increment
        </button>
        <button
          className="btn btn-danger"
          onClick={handleDec}
          disabled={state === 0}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default Reducer;
