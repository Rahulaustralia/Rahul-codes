import React, { useEffect, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(10);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       console.log("setTimeout is call", Date.now(), count);

  //       setCount(count - 1);
  //     }, 1000);
  //   }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("setInterval is call", Date.now(), count);

      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1> Count {count} </h1>
    </div>
  );
};

export default Home;
