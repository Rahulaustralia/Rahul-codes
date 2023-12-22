import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>Counter {count} </h1>
      <button>Inc</button>
      <button>Dec</button>
    </div>
  );
};

export default Counter;
