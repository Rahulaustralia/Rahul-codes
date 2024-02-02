import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleInc, handledec } from "../redux/action/actionCreater";
const Counter = () => {
  let x = useSelector((data) => {
    return data;
  });
  let dispatch = useDispatch();
  return (
    <>
      <h1> Count = {x.inc} </h1>
      <h1> Count = {x.dec} </h1>
      <button
        onClick={() => {
          dispatch(handleInc());
        }}
      >
        INC
      </button>
      <button
        onClick={() => {
          dispatch(handledec());
        }}
      >
        DEC
      </button>
    </>
  );
};

export default Counter;
