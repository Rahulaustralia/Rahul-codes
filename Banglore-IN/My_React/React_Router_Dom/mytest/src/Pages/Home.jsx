import React, { useState } from "react";

let getData = () => {
  fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const Home = () => {
  const [data, setData] = useState([]);
  let responce = getData();
  return (
    <>
      <div id="container"></div>
    </>
  );
};

export default Home;
