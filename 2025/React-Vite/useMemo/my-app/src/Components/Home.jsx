import React, { useEffect, useMemo, useState } from "react";

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

  return (
    <div>
      <h1> Count:{count} </h1>
      <h2>Number: {Number}</h2>
    </div>
  );
};

export default Home;
