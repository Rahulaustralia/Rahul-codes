import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incHandler, decHandler } from "../redux/action/action.Creater";

const Counter = () => {
  let x = useSelector((item) => {
    return item.counterReducer;
  });
  let dispatch = useDispatch();
  return (
    <div>
      <h1>Inc: {x.inc}</h1>
      <h2>Dec: {x.dec}</h2>
      <button
        onClick={() => {
          dispatch(incHandler());
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          dispatch(decHandler());
        }}
      >
        Dec
      </button>
    </div>
  );
};

export default Counter;
