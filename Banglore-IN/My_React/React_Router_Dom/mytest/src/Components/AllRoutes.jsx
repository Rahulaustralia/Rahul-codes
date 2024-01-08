import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Products from "../Pages/Products";
import Cart from "../Pages/Cart";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
