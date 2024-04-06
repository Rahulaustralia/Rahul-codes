import React from "react";
import ImageSlider from "./Components/Demo";
import Test from "./Components/Test";
import Home from "./Components/Home";
import Myapi from "./Components/Myapi";
import MyTask from "./Components/MyTask";

const App = () => {
  const images = [
    "https://b.zmtcdn.com/data/pictures/chains/0/57750/c0dba4f1a9e9ed395cdca92b9337e618_featured_v2.jpg?output-format=webp",
    "https://b.zmtcdn.com/data/pictures/1/21097021/5dda72e06a1483a70ebfc54ec465b357_featured_v2.jpg?output-format=webp",
    "https://b.zmtcdn.com/data/pictures/4/20790444/8f8f42f073040a4a247ce86447cf0746_featured_v2.jpg?output-format=webp",
  ];
  return (
    <>
      <div className="app">
        {/* <h1>Image Slider</h1>
        <ImageSlider images={images} />
        <Test /> */}
        {/* <Home /> */}
        <Myapi />
        <MyTask />
      </div>
    </>
  );
};

export default App;
