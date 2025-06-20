import React, { useContext } from "react";
import { MyContext } from "../Context/Mycontext";

const Home = () => {
  const { GlobalName, GlobalCountry } = useContext(MyContext);

  return (
    <div>
      <h1>Home </h1>
      <h2>
        Hi My Name is {GlobalName} and I am from {GlobalCountry}{" "}
      </h2>
    </div>
  );
};

export default Home;
