import React from "react";
import Counter from "./Components/Counter";
import Todo from "./Components/Todo";
import MyuseReducer from "./Components/MyuseReducer";

const App = () => {
  return (
    <div>
      {/* <RedCounter cmp={Counter} />
      <GreenCounter cmp={Counter} /> */}
      <Todo />
      <MyuseReducer />
    </div>
  );
};

const RedCounter = (propsMY) => {
  return (
    <h2 style={{ backgroundColor: "red", width: "300px" }}>
      Red <propsMY.cmp />
    </h2>
  );
};

const GreenCounter = (propsMY) => {
  return (
    <h2 style={{ backgroundColor: "green", width: "300px" }}>
      Green🫡 <propsMY.cmp />
    </h2>
  );
};

export default App;
