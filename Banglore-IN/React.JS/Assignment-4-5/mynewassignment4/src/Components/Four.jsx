import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
var FetchData;
const Four = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    return fetch(`https://fakestoreapi.com/products`).then((res) => res.json());
  };

  const handleClick = async () => {
    try {
      const responce = await getData();
      console.log(responce);
      FetchData = responce;
      setData(FetchData);
      console.log(setData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick1 = () => {
    let x = FetchData.filter((item) => {
      return item.category === "jewelery";
    });
    setData(x);
  };

  const handleClick2 = () => {
    let x = FetchData.filter((item) => {
      return item.category === "men's clothing";
    });
    setData(x);
  };

  const handleClick3 = () => {
    let wx = FetchData.filter((item) => {
      return item.category === "women's clothing";
    });
    setData(wx);
  };

  const handleClick4 = () => {
    let ex = FetchData.filter((item) => {
      return item.category === "electronics";
    });
    setData(ex);
  };

  return (
    <div>
      <h1> Four </h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button className="btn btn-danger" onClick={handleClick1}>
          jewelery
        </button>
        <button className="btn btn-success" onClick={handleClick2}>
          Men
        </button>
        <button className="btn btn-warning" onClick={handleClick3}>
          Women
        </button>
        <button className="btn btn-info" onClick={handleClick4}>
          {" "}
          Electronics
        </button>
      </div>
      <div>
        {" "}
        <h1> Products </h1>
        <button className="btn btn-primary" onClick={handleClick}>
          Get Data
        </button>
      </div>
      <div
        style={{
          width: "90%",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px",
          margin: "auto",
        }}
      >
        {data.map((post) => {
          return (
            <>
              <div
                className="card"
                style={{ border: "1px solid black" }}
                key={post.id}
              >
                <h1>Title:- {post.title} </h1>
                <h2>Price:- {post.price} </h2>
                <p>Category:- {post.category} </p>
                <img
                  style={{ width: "200PX", height: "200px" }}
                  src={post.image}
                  alt="error"
                />
              </div>
              ;
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Four;
