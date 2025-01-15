import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  return (
    <>
      <h1> Fetch API Data </h1>
    </>
  );
};

export default Fetch;
