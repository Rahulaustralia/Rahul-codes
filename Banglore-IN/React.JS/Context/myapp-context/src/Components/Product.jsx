import React, { useContext } from "react";
import { ContextProduct } from "../index";

const Product = () => {
  const data = useContext(ContextProduct);
  console.log(data);

  function handleAddtocart(id) {
    console.log("Hi i am add to cart", id);
  }

  return (
    <div>
      <h1> Products </h1>
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px",
        }}
      >
        {data.map((item, i) => {
          return (
            <>
              <div
                key={item.id}
                style={{
                  border: "2px solid blue",
                  borderRadius: "10px",
                  padding: "10px",
                }}
              >
                <img
                  style={{ width: "100%", height: "250px" }}
                  src={item.image}
                  alt="error"
                />
                <h1> ID:- {item.id} </h1>
                <h1>Title:- {item.title} </h1>
                <h3> Category:- {item.category} </h3>
                <h2 style={{ color: "red" }}> Price:- {item.price}</h2>
                <button
                  onClick={() => {
                    handleAddtocart(item.id);
                  }}
                >
                  {" "}
                  Add To Cart{" "}
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
