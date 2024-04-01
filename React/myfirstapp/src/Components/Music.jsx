import React, { useEffect, useState } from "react";

const Music = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://v1.nocodeapi.com/visheshpandey/spotify/dNxiRTREOhvTzsYn/search?q=daku&type=track"
    )
      .then((res) => res.json())
      .then((myData) => {
        setData(myData.tracks.items);
      });
  }, []);

  console.log(data);

  return (
    <>
      <h1> Rahul </h1>
      {data.map((el) => {
        return (
          <div>
            <img src={el.album.images[0].url} alt="error" />
            <audio src={el.preview_url} controls></audio>
          </div>
        );
      })}
    </>
  );
};

export default Music;
