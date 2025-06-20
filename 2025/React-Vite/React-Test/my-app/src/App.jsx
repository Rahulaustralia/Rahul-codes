import React from "react";
import Home from "./Components/Home";
import { MyProvider } from "./Context/Mycontext";
import Fetch from "./Components/Fetch";

const App = () => {
  return (
    <div>
      <MyProvider>
        <Home />
        <Fetch />
      </MyProvider>
    </div>
  );
};

export default App;
