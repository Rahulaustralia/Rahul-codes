import React, { useState } from "react";

function getData() {
  return fetch(`https://fakestoreapi.com/products`).then((res) => res.json());
}

const Fetch = () => {
  let [data, setData] = useState([]);
  async function handleClick() {
    try {
      const responce = await getData();
      setData(responce);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <h1> Products</h1>
      <button onClick={handleClick}>Get Data</button>
      <div>
        {data.map((el) => {
          return (
            <>
              <li key={el.id}> {el.title} </li>;
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Fetch;
