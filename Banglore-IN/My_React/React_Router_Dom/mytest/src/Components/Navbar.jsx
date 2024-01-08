import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";

const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="nav_parent">
        <Link to="/" className="nav1">
          Home
        </Link>

        <Link to="/products" className="nav1">
          Products
        </Link>
        <Link to="/cart" className="nav1">
          Cart
        </Link>
        <Link to="/about" className="nav1">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
