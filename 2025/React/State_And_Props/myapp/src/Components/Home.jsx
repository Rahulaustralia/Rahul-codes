import React, { useState, useEffect } from "react";
import "../Style/Home.css";

const Home = () => {
  const images = [
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/53dcf24ecc20bf27.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/d9290fb51138d286.png?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/7ebf38837ddd6c4d.jpg?q=20",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((result) => result.json())
      .then((res) => {
        setData(res.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  return (
    <>
      <div id="navbar">
        <div id="rp1">
          <h1>LoGo</h1>
        </div>
        <div id="rp2">
          <p>Product</p>
          <p>Men's</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div id="rp3">
          <h3>Login</h3>
        </div>
      </div>

      <div id="slider">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="slider-image"
        />
      </div>
      <div id="items">
        {data.map((el) => {
          return (
            <div key={el.id} id="child">
              <img src={el.images} alt="" />
              <p maxlength="5">{el.description}</p>
              <h6>₹{el.price}</h6>
              <button> Add to cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
