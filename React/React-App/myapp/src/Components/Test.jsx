import React, { useEffect, useState } from "react";

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
      <div>
        {data.map((el) => {
          return (
            <div key={el.id}>
              <h1> {el.title} </h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Test;
