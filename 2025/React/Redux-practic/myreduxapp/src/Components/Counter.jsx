import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((item) => item);

  console.log("counter", counter);

  const dispatch = useDispatch();

  const handleClickInc = () => {
    dispatch({ type: "INC", payload: 2 });
    dispatch({ type: "INC2", payload: 2 });
  };

  return (
    <>
      <h1> Count {counter.Counter.count1}</h1>
      <h2>Count 2 {counter.Counter.count2}</h2>
      <h3>Count 3 = {counter.Counter.count3}</h3>
      <h4> Number {counter.Number.number}</h4>
      <button onClick={handleClickInc}>Increment</button>
    </>
  );
};

export default Counter;
