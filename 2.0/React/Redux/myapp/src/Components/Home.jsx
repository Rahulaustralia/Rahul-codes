import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const counter = useSelector((item) => item);
  const dispatch = useDispatch();

  console.log(counter);

  const handleInc = () => {
    dispatch({ type: "INC", payload: 2 });
  };
  const handleDec = () => {
    dispatch({ type: "DEC", payload: 1 });
  };

  return (
    <>
      <h1> mycount = {counter.Counter.count}</h1>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </>
  );
};

export default Home;
