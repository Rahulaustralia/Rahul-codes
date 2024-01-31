import React from "react";
import "../Style/Header.css";

const Header = ({ count }) => {
  return (
    <>
      <div className="Navbar">
        <div className="one">
          <h3>LoGo</h3>
        </div>
        <div className="two">
          <a href="#">Product</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="three">
          <p>Cart</p>
          <sup>{count}</sup>
        </div>
      </div>
    </>
  );
};

export default Header;
