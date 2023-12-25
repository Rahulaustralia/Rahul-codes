import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && <Counter />}
      <button onClick={() => setShow(!show)}> Show Counter </button>
    </>
  );
}

export default App;
