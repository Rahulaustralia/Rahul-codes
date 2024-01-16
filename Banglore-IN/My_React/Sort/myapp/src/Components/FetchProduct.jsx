import React, { useEffect, useState } from "react";

const FetchProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((myData) => setData(myData.products));
    console.log(data);
  }, []);

  function handleHtoL() {
    const sortedData = [...data].sort((a, b) => b.price - a.price);
    setData(sortedData);
  }

  function handleLtoH() {
    const sortedData = [...data].sort((a, b) => a.price - b.price);
    setData(sortedData);
  }

  return (
    <div>
      <h1> Product Fetch </h1>
      <button onClick={handleHtoL}> High To Low </button>
      <button onClick={handleLtoH}> Low To High </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}
      >
        {data.map((item) => {
          return (
            <>
              <div key={item.id} style={{ border: "1px solid black" }}>
                <img
                  style={{ height: "200px" }}
                  src={item.images[0]}
                  alt="error"
                />
                <h4> Brand:- {item.brand}</h4>
                <p>Category:- {item.category}</p>
                <h4> Price :- {item.price} </h4>
                <button>Add to cart</button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FetchProduct;
