import React, { useState } from "react";

const Home = (props) => {
  const [myName, setMyName] = useState(props.defaultName);

  const handleChange = (e) => {
    setMyName(e.target.value);
  };

  return (
    <>
      <h1> My Name is </h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={handleChange}
      />
      <h2> Hear is your name {myName} </h2>
    </>
  );
};

export default Home;
