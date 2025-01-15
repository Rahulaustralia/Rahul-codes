import React, { useReducer } from "react";

const initialState = 0;
function reducer(state, action) {
  switch (action) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;

    default:
      return state;
  }
}
const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1> Counter App </h1>
      <h2>Count= {count}</h2>
      <button onClick={() => dispatch("INC")}>Increment</button>
      <button onClick={() => dispatch("DEC")}>Decrement</button>
    </>
  );
};

export default Counter;
