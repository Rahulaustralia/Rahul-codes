import React, { useEffect, useState } from "react";

const Test = () => {
  useEffect(() => {
    console.log("Hello world!");
  }, []);

  let [count, setCount] = useState(0);

  return (
    <>
      <h1> Count = {count} </h1>
      <button onClick={() => setCount(count + 1)}>inc</button>
    </>
  );
};

export default Test;
