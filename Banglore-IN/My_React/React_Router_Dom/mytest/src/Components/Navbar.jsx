import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/products"> Products </Link>
      </div>
    </div>
  );
};

export default Navbar;
