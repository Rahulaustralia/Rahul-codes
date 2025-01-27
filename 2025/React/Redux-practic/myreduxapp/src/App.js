import React from "react";
import Counter from "./Components/Counter";
import { store } from "./Components/Redux/Store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default App;
