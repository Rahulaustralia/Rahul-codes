import React, { useEffect, useState } from "react";

const MyFetch = () => {
  const [data, setData] = useState([]);

  function getData() {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <br />
      <div>
        <label>Search </label>
        <input type="text" />
      </div>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px",
        }}
      >
        {data.map((el) => {
          return (
            <>
              <div style={{ border: "1px solid black" }}>
                <h1> id:- {el.id}</h1>
                <p>Tittle:- {el.title} </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MyFetch;
