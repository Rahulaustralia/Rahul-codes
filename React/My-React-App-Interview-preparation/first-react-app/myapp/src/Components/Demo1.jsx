import React, { useEffect, useState } from "react";
import "../Style/Demo.css";
const Demo1 = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((mydata) => {
        setData(mydata);
      });
  }, []);
  console.log(data);
  return (
    <>
      <h1 style={{ textAlign: "center", color: "red" }}> Fetch Api </h1>
      <div className="container">
        {data.map((el) => {
          return (
            <div className="child" key={el.id}>
              <img className="child-img" src={el.image} alt="error" />

              <p> {el.category} </p>
              <h6>Price:- {el.price}</h6>
              <h6>Rating:- {el.rating.rate}</h6>
              <h6>Available Quantity:- {el.rating.count}</h6>
              <button className="btn">Add to cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Demo1;
