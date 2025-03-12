import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const value = useSelector((el) => {
    return el.CounterReducer;
  });

  let dispatch = useDispatch();

  let handleINC = () => {
    dispatch({ type: "INC", payload: 1 });
  };

  return (
    <div>
      <h1> Counter {value.count} </h1>

      <button onClick={handleINC}>INCREMENT</button>
      <button>DECREMENT</button>
    </div>
  );
};

export default Counter;
