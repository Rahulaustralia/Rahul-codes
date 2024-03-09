import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((mydata) => {
        setData(mydata);
      });
  }, []);

  return (
    <>
      <h1> Fetch Data </h1>
      <div>
        {data.map((el, i) => {
          return (
            <div key={el.id}>
              <h1> {el.id} </h1>
              <p> {el.price} </p>
              <img src={el.image} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Fetch;
