import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEC, INC } from "./Redux/Action/actionType";

const Home = () => {
  const counter = useSelector((store) => store.Counter);
  const dispatch = useDispatch();
  console.log(counter);
  function handleInc() {
    dispatch({ type: INC, payload: 1 });
  }
  function handleDec() {
    dispatch({ type: DEC, payload: 2 });
  }

  return (
    <div>
      <h1> Counter {counter.count}</h1>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
};

export default Home;
