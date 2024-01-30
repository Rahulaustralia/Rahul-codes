import React from "react";
import "../Style/Header.css";

const Header = () => {
  return (
    <>
      <div className="Navbar">
        <div className="one">
          <h1>LoGo</h1>
        </div>
        <div className="two">
          <a href="#">Product</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="three"></div>
      </div>
    </>
  );
};

export default Header;
