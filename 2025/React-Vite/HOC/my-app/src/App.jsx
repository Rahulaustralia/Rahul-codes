import React from "react";
import Counter from "./Components/Counter";

const App = () => {
  return (
    <div>
      <RedCounter cmp={Counter} />
    </div>
  );
};

const RedCounter = (propsMY) => {
  return (
    <h2 style={{ backgroundColor: "red", width: "100px" }}>
      Red <propsMY.cmp />
    </h2>
  );
};

export default App;
