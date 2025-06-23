import React from "react";
import Home from "./Components/Home";
import { MyContext, MyProvider } from "./Context/GlobalData";

const App = () => {
  return (
    <div>
      <MyProvider>
        <Home />
      </MyProvider>
    </div>
  );
};

export default App;
