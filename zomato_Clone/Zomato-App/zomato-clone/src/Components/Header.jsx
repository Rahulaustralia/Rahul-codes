import React from "react";
import TuneIcon from "@mui/icons-material/Tune";

const Header = () => {
  return (
    <>
      <div className="rp-head-box-parent">
        <div id="head-box">
          <img
            className="head-img rp-head-img-1"
            src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp"
            alt="error"
          />
          <p className="head-p" style={{ color: "#ff7e8b" }}>
            Dining Out
          </p>
          <img
            className="head-img img-space"
            src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp"
            alt="error"
            style={{ backgroundColor: "#f8f8f8 " }}
          />
          <p className="head-p">Delivery </p>
          <img
            className="head-img img-space"
            src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"
            alt="error"
            style={{ backgroundColor: "#f8f8f8 " }}
          />
          <p className="head-p">Nightlife </p>
        </div>
      </div>
      <div id="head-mid">
        <div id="head-mid-child">
          <p id="Collections"> Collections </p>
          <br />

          <p id="rp-title">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Bengaluru, based on trends
          </p>
          <div id="rp-head-grid">
            <img
              src="https://b.zmtcdn.com/data/pictures/chains/4/50574/44146c1d867a6eeefeb84a8315457213_featured_v2.jpg"
              alt="error"
            />

            <img
              src="https://b.zmtcdn.com/data/pictures/chains/0/52860/cd92fc9ff77dcc6c34cf427127774ca2_featured_v2.jpg"
              alt="error"
            />

            <img
              src="https://b.zmtcdn.com/data/pictures/chains/9/53059/7ec44f41e2c689555caf1e0a66b17eae_featured_v2.jpg"
              alt="error"
            />

            <img
              src="https://b.zmtcdn.com/data/pictures/4/20733674/f5d8664b7363836a37a4f19e47b63215_featured_v2.jpg"
              alt="error"
            />
          </div>
        </div>
        <br />
        <br />
      </div>
      <div id="rp-head-button-section">
        <div id="rp-head-button-section-child">
          <p className="rp-btn1">
            <TuneIcon sx={{ fontSize: "12px" }} /> Filters
          </p>
          <p className="rp-btn1">Gold</p>
          <p className="rp-btn1">Rating: 4.0+</p>
          <p className="rp-btn1">Outdoor Seating</p>
          <p className="rp-btn1">Serves Alcohol</p>
          <p className="rp-btn1">Open Now</p>
        </div>
      </div>
      <div id="rp-head-banner">
        <img
          src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png"
          alt="error"
        />
        <p>
          Trending dining restaurants in Purva Riviera, Spice Garden Layout,
          Marathahalli
        </p>
      </div>
    </>
  );
};

export default Header;
