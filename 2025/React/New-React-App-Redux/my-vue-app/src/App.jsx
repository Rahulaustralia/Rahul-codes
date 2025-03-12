import React from "react";
import Counter from "./Components/Counter";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import Fetch from "./Components/Fetch";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter />
        <Fetch />
      </Provider>
    </div>
  );
};

export default App;
