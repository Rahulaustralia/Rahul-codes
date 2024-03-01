import React, { useEffect, useState } from "react";

const Test = () => {
  useEffect(() => {
    console.log("Re-Reneder");
  }, []);
  let [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1> Count :- {count}</h1>
      <button onClick={handleClick}>INC</button>
    </div>
  );
};

export default Test;
