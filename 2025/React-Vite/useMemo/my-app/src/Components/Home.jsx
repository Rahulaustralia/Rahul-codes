import React, { useCallback, useEffect, useMemo, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  });

  const Number = useMemo(() => {
    return Math.random().toFixed(2);
  }, []);

  let b = Math.random().toFixed(2);

  const myFunction = (a = b) => {
    return a;
  };

  const rG = useCallback(myFunction(), []);

  console.log("My Function", myFunction());
  console.log(rG());

  return (
    <div>
      <h1> Count:{count} </h1>
      <h2>Number: {Number}</h2>
    </div>
  );
};

export default Home;
