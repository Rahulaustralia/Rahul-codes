import React, { useEffect, useState } from "react";

const Demo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
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
    <div>
      <h1> Demo Fetch Data </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "5px",
        }}
      >
        {data.map((el) => {
          return (
            <div
              key={el.id}
              style={{ border: "1px solid blue", textAlign: "center" }}
            >
              <h3>Name:- {el.name}</h3>
              <span>Email:- {el.email}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Demo;
