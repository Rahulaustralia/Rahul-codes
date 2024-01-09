import React, { useContext } from "react";
import ChildC from "./ChildC";
import { myContext } from "../Context/AppContext";

const ChildB = () => {
  const sport = useContext(myContext);
  return (
    <>
      <h1> I Love to play {sport} </h1>
    </>
  );
};

export default ChildB;
