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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6197eddc0cf4320b6e59ac29bbc55cf_9366/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE0098_21_model.jpg",
  },
  {
    category: "cars",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6197eddc0cf4320b6e59ac29bbc55cf_9366/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE0098_21_model.jpg",
  },
  {
    category: "cars",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6197eddc0cf4320b6e59ac29bbc55cf_9366/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE0098_21_model.jpg",
  },
  {
    category: "cars",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6197eddc0cf4320b6e59ac29bbc55cf_9366/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE0098_21_model.jpg",
  },
  {
    category: "",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6197eddc0cf4320b6e59ac29bbc55cf_9366/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE0098_21_model.jpg",
  },
  {
    category: "sport",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6197eddc0cf4320b6e59ac29bbc55cf_9366/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE0098_21_model.jpg",
  },
  {
    category: "sport",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6197eddc0cf4320b6e59ac29bbc55cf_9366/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE0098_21_model.jpg",
  },
  {
    category: "sport",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6197eddc0cf4320b6e59ac29bbc55cf_9366/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE0098_21_model.jpg",
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
    width: "90%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    margin: "auto",
    gap: "10px",
  };

  return (
    <div>
      <div id="sort">
        <input
          type="text"
          placeholder="Enter Your Search Category"
          onChange={handleOnchange}
          value={text}
        />
        <button onClick={handleClick}> Search </button>
      </div>
      <div style={styles}>
        {data.map((item, i) => {
          return (
            <>
              <div style={{ border: "1px solid black" }}>
                <h1> {item.i} </h1>
                <img
                  style={{ width: "100%", height: "400px" }}
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
