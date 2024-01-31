import React from "react";
import "../Style/Product.css";

const Productlist = ({ product, addToCart }) => {
  //   console.log(product);

  return (
    <>
      <div className="parent">
        {product.map((item) => {
          return (
            <div className="child" key={item.id}>
              <img src={item.images[0]} alt="error" />
              <h4>Title:- {item.title} </h4>
              <h6>Rs. {item.price}</h6>
              <p>Details:- {item.description}</p>
              <button onClick={() => addToCart(item)}>Add To Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Productlist;
