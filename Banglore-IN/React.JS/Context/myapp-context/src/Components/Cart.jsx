import React from "react";
import { ContextData } from "../index";

const Cart = () => {
  return (
    <div>
      <h1> Cart </h1>

      <ContextData.Consumer>
        {(item) => {
          return (
            <>
              {" "}
              <h1>Name:- {item.name} </h1>
              <h2>Address:- {item.add} </h2>
            </>
          );
        }}
      </ContextData.Consumer>
    </div>
  );
};

export default Cart;
