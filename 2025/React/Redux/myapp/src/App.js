import React from "react";
import Home from "./Components/Home";
import { Provider } from "react-redux";
import { store } from "./Components/Redux/Store";
import Fetch from "./Components/Fetch";
import Todo from "./Components/Todo";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Home />
        <hr />
        <Fetch />
        <Todo />
      </Provider>
    </>
  );
};

export default App;
