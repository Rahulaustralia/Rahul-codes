import React, { useState } from "react";
import { ReactDOM } from "react";

const ImageSlider = ({ images }) => {
  const [currentImageindex, setCurrentImageIndex] = useState(0);

  const nextslide = () => {
    setCurrentImageIndex((prevIndex) => {
      prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });

    const prevSlide = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
    return (
      <div className="image-slider">
        <button onClick={prevSlide}>prev</button>
        <img src="" />
        <button onClick={nextslide}>Next</button>
      </div>
    );
  };
};
export default ImageSlider;
