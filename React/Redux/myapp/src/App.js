import React from "react";
import Home from "./Components/Home";
import { Provider } from "react-redux";
import { store } from "./Components/Redux/Store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
};

export default App;
