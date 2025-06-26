import React from "react";
import Home from "./Components/Home";
import { MyContext, MyProvider } from "./Context/GlobalData";
import Filter from "./Components/Filter";
import Todo from "./Components/Todo";

const App = () => {
  return (
    <div>
      <MyProvider>
        <Home />
        <hr />
        <Filter />
        <hr />
        <Todo />
      </MyProvider>
    </div>
  );
};

export default App;
