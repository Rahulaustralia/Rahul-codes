import React, { useContext } from "react";
import { Data } from "./ChildA";

const ChildC = () => {
  const context = useContext(Data);
  return (
    <div>
      <h1> My Name is Rahul Pandey and i am from {context} </h1>
    </div>
  );
};

export default ChildC;
