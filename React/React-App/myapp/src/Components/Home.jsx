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
import PauseIcon from "@mui/icons-material/Pause";

const Home = () => {
  const [data, setData] = useState([]);
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(30);

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

  const handleCardClick = (music) => {
    setSelectedMusic(music);
    setIsPlaying(true); // Auto-play when a music is selected
  };

  const handleNext = () => {
    if (selectedMusic) {
      const currentIndex = data.findIndex(
        (music) => music.id === selectedMusic.id
      );
      const nextIndex = (currentIndex + 1) % data.length;
      setSelectedMusic(data[nextIndex]);
      setIsPlaying(true); // Auto-play next music
    }
  };

  const handlePrevious = () => {
    if (selectedMusic) {
      const currentIndex = data.findIndex(
        (music) => music.id === selectedMusic.id
      );
      const previousIndex = (currentIndex - 1 + data.length) % data.length;
      setSelectedMusic(data[previousIndex]);
      setIsPlaying(true); // Auto-play previous music
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleChangeVolume = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <>
      <div className="parent">
        <div className="container1">
          <h2 className="h2"> Library </h2>
          <div className="music-container">
            {data.map((music) => {
              const shortDescription = music.description
                .split(" ")
                .slice(0, 10)
                .join(" ");
              return (
                <div
                  key={music.id}
                  className="music-child"
                  onClick={() => handleCardClick(music)}
                >
                  <img src={music.image} alt="error" />
                  <div className="music-details">
                    <h5>{music.title}</h5>
                    <p>{shortDescription}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container2">
          <div className="topNav">
            <h2>Waves</h2> {/* Moved "Waves" title here */}
            <button className="btn1">Library</button>
          </div>
          <div className="mid-part">
            {selectedMusic && (
              <>
                <img src={selectedMusic.image} alt="error" />
                <h2>{selectedMusic.title}</h2>
                <p>{selectedMusic.category}</p>
                <p>{selectedMusic.description.slice(0, 20)}...</p>{" "}
                {/* Display limited description */}
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
                  value={volume}
                  onChange={handleChangeVolume}
                />
                <VolumeUp />
              </Stack>
            </Box>
            <ArrowBackIosIcon
              style={{ marginRight: "20px", fontWeight: "bold" }}
              onClick={handlePrevious}
            />
            {isPlaying ? (
              <PauseIcon onClick={handlePlayPause} />
            ) : (
              <PlayArrowIcon onClick={handlePlayPause} />
            )}
            <ArrowForwardIosIcon
              style={{ marginLeft: "20px", fontWeight: "bold" }}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
