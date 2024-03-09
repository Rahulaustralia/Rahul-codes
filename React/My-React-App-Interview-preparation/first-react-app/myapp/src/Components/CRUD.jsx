import React, { useEffect, useState } from "react";

const CRUD = () => {
  const [data, setData] = useState([]);
  const url = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <h1> CRUD Operation using Fetch GET | PUT | POST </h1>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.category}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default CRUD;
