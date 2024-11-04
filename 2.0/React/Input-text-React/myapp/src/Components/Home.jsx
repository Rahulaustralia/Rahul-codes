import React, { useEffect, useState } from "react";
import "../Style/Home.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((myData) => setData(myData.slice(0, 4)))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  return (
    <>
      <h1> Fetch API </h1>

      <div id="parent">
        {data.map((el) => {
          return (
            <div key={el.id} id="child">
              <h1> Id:- {el.id} </h1>
              <p>Title:- {el.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
