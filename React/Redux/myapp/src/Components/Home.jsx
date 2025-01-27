import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const counter = useSelector((store) => store.Counter);
  const dispatch = useDispatch();

  console.log(counter);
  const handleClickInc = () => {
    dispatch({ type: "INC", payload: 2 });
  };
  return (
    <>
      <h1> Counter {counter}</h1>
      <button onClick={handleClickInc}>Increment</button>
    </>
  );
};

export default Home;
