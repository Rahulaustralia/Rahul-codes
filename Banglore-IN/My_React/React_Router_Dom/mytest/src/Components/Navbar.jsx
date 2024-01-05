import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";

const Navbar = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "black",
          color: "white",
          padding: "12px",
        }}
      >
        <Link to="/" className="nav1">
          Home
        </Link>
        <Link to="/about" className="nav1">
          About
        </Link>
        <Link to="/products" className="nav1">
          Products
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
