import React, { useEffect, useState } from "react";
import "../Style/Cart.css";
const Cartlist = ({ cart }) => {
  const [myCart, setMyCart] = useState([]);

  useEffect(() => {
    setMyCart(cart);
  }, [cart]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}> Cart </h1>
      <div className="cart-parent">
        {myCart?.map((el, i) => {
          return (
            <div className="class-child" key={el.id}>
              <img src={el.images[0]} al t="error" />
              <h5>{el.title}</h5>
              <button>-</button>
              <h5>{el.quantity}</h5>
              <button
                onClick={() => {
                  const _myCart = myCart.map((item, index) => {
                    return i === index
                      ? { ...item, quantity: item.quantity + 1 }
                      : item;
                  });
                  setMyCart(_myCart);
                }}
              >
                +
              </button>
              <h5>Rs. {el.price * el.quantity}</h5>
            </div>
          );
        })}
      </div>
      <div className="total">
        <h3>
          Total Rs.
          {myCart
            .map((item) => item.price * item.quantity)
            .reduce((total, value) => total + value, 0)}
          /-
        </h3>
      </div>
    </>
  );
};

export default Cartlist;
