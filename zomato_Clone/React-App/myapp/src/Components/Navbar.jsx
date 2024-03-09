import React from "react";
import "./style/mystyle.css";
const Navbar = () => {
  return (
    <>
      <div className="nav-main">
        <img
          className="rp-img"
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="error"
        />
        <div className="nav-search">
          <select name="" id="">
            <option value="">Delhi</option>
            <option value="">Indore</option>
            <option value="">Dewas</option>
            <option value="">Ujjain</option>
          </select>
          |
          <input
            className="nav-input"
            type="text"
            placeholder="Search From rest...."
            id=""
          />
        </div>

        <div className="nav-login">
          <p>Login</p>
          <p>Signup</p>
        </div>
      </div>
      <br />
      <div>
        <p className="nav-next">
          Home / India / Patna / Old Jakkanpur, Raja Ji Salai, Indira Nagar,
          Patna Restaurants
        </p>
      </div>
      <div className="header">
        <div className="head-child1">
          <img
            className="head-img1"
            src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
            alt="error"
          />
          <p className="head-p1">Dining Out</p>
        </div>
        <div className="head-child1">
          <img
            className="head-img1"
            src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
            alt="error"
          />
          <p className="head-p1">Delivery</p>
        </div>
      </div>
      <div className="header-mid">
        <p className="hm-p">Filter</p>
        <p className="hm-p">Rating: 4.0+</p>
        <p className="hm-p">Pure Veg</p>
        <p className="hm-p">Cuisines </p>
      </div>
      <div className="header-lower">
        <p className="hl-p1">Inspiration for your first order</p>
        <div className="hl-grid">
          <div className="hl-d">
            <img
              src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
              alt="error"
            />{" "}
            <p>abc</p>
          </div>
          <div className="hl-d">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
              alt="error"
            />{" "}
            <p>abc</p>
          </div>
          <div className="hl-d">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
              alt="error"
            />{" "}
            <p>abc</p>
          </div>
          <div className="hl-d">
            <img
              src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
              alt="error"
            />{" "}
            <p>abc</p>
          </div>
          <div className="hl-d">
            <img
              src="https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
              alt="error"
            />{" "}
            <p>abc</p>
          </div>
          <div className="hl-d">
            <img
              src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
              alt="error"
            />{" "}
            <p>abc</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
