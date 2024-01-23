import { Children } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import HOC from "./Components/HOC";

function App() {
  return (
    <div className="App">
      <HOC children={<Counter />} entity="red" />
      <HOC children={<Counter />} entity="green" />
      <HOC children={<Counter />} entity="black" />
      <HOC children={<Counter />} entity="gold" />
      <HOC children={<Counter />} entity="pink" />
    </div>
  );
}

export default App;
