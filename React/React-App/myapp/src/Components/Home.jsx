import React, { useEffect, useState } from "react";
import "../Style/Home.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Home = () => {
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((myData) => {
        setData(myData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCardClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <>
      <div className="parent">
        <div className="container1">
          <h2 className="h2"> Library </h2>
          <div className="music-container">
            {data.map((el) => {
              return (
                <div
                  key={el.id}
                  className="music-child"
                  onClick={() => handleCardClick(el.image)} // Added onClick event
                >
                  <img src={el.image} alt="error" />
                  <p>{el.category}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container2">
          <div className="topNav">
            <h2>Waves</h2>
            <button className="btn1">Library</button>
          </div>
          <div className="mid-part">
            {selectedImage && ( // Render selected image if exists
              <>
                <img src={selectedImage} alt="error" />
                <h2>Text Hear</h2>
                <p>Song details here</p>
              </>
            )}
          </div>
          <div className="music-player">
            <Box className="rj" sx={{ width: 200 }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
              >
                <VolumeDown />
                <Slider
                  aria-label="Volume"
                  value={value}
                  onChange={handleChange}
                />
                <VolumeUp />
              </Stack>
            </Box>
            <ArrowBackIosIcon
              style={{ marginRight: "20px", fontWeight: "bold" }}
            />
            <PlayArrowIcon />
            <ArrowForwardIosIcon
              style={{ marginLeft: "20px", fontWeight: "bold" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
