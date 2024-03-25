import React, { useEffect, useState } from "react";
import "../Style/Test.css";

const Test = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((myData) => {
        setData(myData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);
  return (
    <>
      <h1> Fetch Data </h1>
      <div className="button">
        <button>High to Low</button>
        <button>Low to High</button>
      </div>
      <div className="parent">
        {data.map((el) => {
          return (
            <div key={el.id} className="child">
              <img src={el.image} alt="error" />
              <h3>Category: {el.category}</h3>
              <p>Title: {el.title} </p>
              <h6>Price: {el.price}</h6>
              <p>Rating: {el.rating.rate}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Test;
