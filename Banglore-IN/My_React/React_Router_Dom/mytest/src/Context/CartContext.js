import React, { useState } from "react";

import { createContext } from "react";

let CartContext = createContext();

export { CartContext };

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function handleCart(data) {
    setCart([...cart, data]);
  }
  return (
    <CartContext.Provider value={{ cart, handleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
