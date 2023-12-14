import React, { useReducer } from "react";

let reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  let [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <div>
        <h1> {state}</h1>
        <button
          onClick={(e) => {
            dispatch({ type: "INC" });
          }}
        >
          inc
        </button>
        <button
          onClick={(e) => {
            dispatch({ type: "DEC" });
          }}
        >
          dec
        </button>
      </div>
    </div>
  );
};

export default Counter;
