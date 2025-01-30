import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);

  const handleClick = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((myData) => {
        setData(myData);
      });
  };

  return (
    <>
      <h1> Fetch </h1>
      <button onClick={handleClick}>Show Data</button>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}>
        {data.map((el) => {
          return (
            <div key={el.id}>
              <h3>Price:- {el.price} </h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Fetch;
