import React, { useContext } from "react";
import { MyContext } from "../Context/GlobalData";

const Home = () => {
  const { GlobalCountry } = useContext(MyContext);
  return (
    <div>
      <h1> Context API </h1>
      <h2> MY Country is {GlobalCountry} </h2>
    </div>
  );
};

export default Home;
