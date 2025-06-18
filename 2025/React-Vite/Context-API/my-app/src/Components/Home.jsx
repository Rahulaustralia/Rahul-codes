import React from "react";
import { MyContext, useMyContext } from "../Context/GlobalData";

const Home = () => {
  const { myName, myCountry } = useMyContext();

  return (
    <div>
      <h1>
        Hello My Name is {myName} and I am from {myCountry}
      </h1>
    </div>
  );
};

export default Home;
