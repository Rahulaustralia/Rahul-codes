import React, { useEffect, useState } from "react";

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
      <div>
        <h1> Fetch Api </h1>
        {data.map((el) => {
          return (
            <div key={el.id}>
              <h1> {el.category} </h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Demo1;
