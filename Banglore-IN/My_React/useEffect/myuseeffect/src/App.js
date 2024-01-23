import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Test from "./Components/Test";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && <Counter />}
      <button onClick={() => setShow(!show)}> Show Counter </button>
      <hr />
      <Test />
    </>
  );
}

export default App;
