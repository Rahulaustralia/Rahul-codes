import React, { useEffect, useState } from "react";

const Test = () => {
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((myData) => {
        setData(myData);
      });
  }, []);

  let [data, setData] = useState([]);
  return (
    <>
      <h1> Test Fetch API </h1>
      <div>
        {data.map((ele) => {
          return (
            <>
              <h1> {ele.title} </h1>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Test;
