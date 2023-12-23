import React, { useState } from "react";

let getData = () => {
  return fetch(`https://fakestoreapi.com/products`).then((res) => res.json());
};

const FetchApi = () => {
  const [data, setData] = useState([]);

  async function handleFetch() {
    try {
      let response = await getData();

      setData(response);

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <h1> Post </h1>
      <button onClick={handleFetch}>Show data</button>
    </div>
  );
};

export default FetchApi;
