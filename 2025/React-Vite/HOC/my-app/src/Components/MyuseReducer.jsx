import React, { useReducer } from "react";

const initialState = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + 1 };
    case "DEC":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const MyuseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1> My useReducer </h1>
      <h3>counter:- {state.count}</h3>
      <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
      <button
        disabled={state.count === 0}
        onClick={() => dispatch({ type: "DEC" })}
      >
        Decrement
      </button>
    </div>
  );
};

export default MyuseReducer;
