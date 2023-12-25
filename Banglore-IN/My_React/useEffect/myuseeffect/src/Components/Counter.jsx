import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let id = setTimeout(() => {
      console.log("counter");
    }, 1000);
    return clearTimeout(id);
  }, [count]);
  return (
    <div>
      <h1> Counter:- {count} </h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        Remove
      </button>
    </div>
  );
};

export default Counter;
