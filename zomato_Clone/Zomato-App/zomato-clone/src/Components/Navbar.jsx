import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div>
      <header>
        <div id="header-container">
          <div className="headerLogo">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              width="126px"
              height="27px"
              alt="zomatoLogo"
            />
          </div>
          <div className="searchContent">
            {/* <i className="fa-solid fa-location-dot location">icon</i> */}
            <LocationOnIcon style={{ marginTop: "8px", color: "#ff7e8b" }} />
            <select>
              <option>Bangalore</option>
              <option>Delhi</option>
              <option>Indore</option>
              <option>Ujjain</option>
            </select>
            <p className="pipe">|</p>
            {/* <i className="fa-solid fa-magnifying-glass glass"></i> */}
            <SearchIcon style={{ marginTop: "9px", marginLeft: "5px" }} />
            <input
              className="search"
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
          <div className="buttonsBox">
            <button className="buttons">Log in</button>
            <button className="buttons">Sign Up</button>
          </div>
        </div>
        {/* header-container end*/}
      </header>
    </div>
  );
};

export default Navbar;
