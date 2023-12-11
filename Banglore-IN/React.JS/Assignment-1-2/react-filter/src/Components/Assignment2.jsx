import React, { useState } from "react";
// import "../../node_modules";
const images = [
  {
    category: "sport",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6197eddc0cf4320b6e59ac29bbc55cf_9366/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE0098_21_model.jpg",
  },
  {
    category: "sport",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f0dec3036b6a4934bffbdbc29b8797c9_9366/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE0098_22_model.jpg",
  },
  {
    category: "sport",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e7780fb996049f5bc7662ecb284ca35_9366/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE0098_23_hover_model.jpg",
  },
  {
    category: "sport",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/81f36f0ecf4a4eaa80b13b490742ce2c_9366/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE0098_25_model.jpg",
  },
  {
    category: "cars",
    url:
      "https://w0.peakpx.com/wallpaper/464/263/HD-wallpaper-thar-car-wagon-wrangler.jpg",
  },
  {
    category: "cars",
    url:
      "https://w0.peakpx.com/wallpaper/830/757/HD-wallpaper-thar-diaries-adventure-autombiles-cars-mahindra-jeep-thumbnail.jpg",
  },
  {
    category: "cars",
    url:
      "https://w0.peakpx.com/wallpaper/608/133/HD-wallpaper-sexy-black-scorpio-car-modified-cars-black-mahindra-scorpio-black-lover-scorpio-beast-thumbnail.jpg",
  },
  {
    category: "cars",
    url:
      "https://w0.peakpx.com/wallpaper/815/802/HD-wallpaper-range-rover-class-thumbnail.jpg",
  },
  {
    category: "army",
    url:
      "https://w0.peakpx.com/wallpaper/898/259/HD-wallpaper-indian-army-army-militry-indian-thumbnail.jpg",
  },
  {
    category: "army",
    url:
      "https://w0.peakpx.com/wallpaper/551/221/HD-wallpaper-indian-army-para-sf-art-militry-thumbnail.jpg",
  },
  {
    category: "army",
    url:
      "https://w0.peakpx.com/wallpaper/970/846/HD-wallpaper-shivaji-maharaj-chhatrapati-shivaji-maharaj-thumbnail.jpg",
  },
  {
    category: "army",
    url:
      "https://w0.peakpx.com/wallpaper/435/73/HD-wallpaper-dassault-rafale-dassault-rafale-thumbnail.jpg",
  },
];

const Assignment2 = () => {
  const [text, setText] = useState("");

  const [data, setData] = useState(images);

  function handleOnchange(e) {
    setText(e.target.value);
    console.log(e.target.value);
  }

  function handleClick() {
    let filterData = images.filter((ele, i) => {
      return ele.category === text;
    });
    setData(filterData);
    console.log(data);
  }

  const styles = {
    width: "95%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    margin: "auto",
    gap: "15px",
  };

  return (
    <div>
      <div id="sort">
        <input
          type="text"
          placeholder="Enter Your Search Category"
          onChange={handleOnchange}
          value={text}
          style={{
            padding: "10px",
            width: "300px",
            margin: "15px 10px 15px 15px",
          }}
        />
        <button
          onClick={handleClick}
          style={{
            padding: "10px",
            width: "150px",
            color: "white",
            backgroundColor: "black",
            fontWeight: "bold",
            fontSize: "15px",
            borderRadius: "10px",
          }}
        >
          {" "}
          Search{" "}
        </button>
      </div>
      <div style={styles}>
        {data.map((item, i) => {
          return (
            <>
              <div
                style={{
                  boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  textAlign: "center",
                  color: "red",
                }}
              >
                <h1> {item.i} </h1>
                <img
                  style={{ width: "100%", height: "450px" }}
                  src={item.url}
                  alt={item.category}
                />
                <h2> Category:- {item.category}</h2>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Assignment2;
