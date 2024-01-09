import React, { createContext } from "react";
import ChildC from "./ChildC";

const Data = createContext();

const ChildA = () => {
  return (
    <Data.Provider value={"Dewas"}>
      <ChildC />
    </Data.Provider>
  );
};

export default ChildA;
export { Data };
