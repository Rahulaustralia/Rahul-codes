import React from "react";
import "./Style/Navbar.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="leftNav">
          <h2>E-comm</h2>
        </div>
        <div className="middleNav">
          <Link to="/">
            <p>Home </p>
          </Link>

          <Link to="/product">
            <p>Product</p>
          </Link>

          <Link to="/product">
            <p>Cart</p>
          </Link>
        </div>
        <div className="rightNav">
          <Link to="/login">
            <Button variant="contained" startIcon={<LoginIcon />}>
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="contained" endIcon={<PersonAddIcon />}>
              Register
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
