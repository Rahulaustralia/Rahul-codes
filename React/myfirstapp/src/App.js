import "./App.css";
import FetchAPI from "./Components/FetchAPI";
import Todo from "./Components/Todo";

function App() {
  return (
    <div className="App">
      <Todo />
      <FetchAPI />
    </div>
  );
}

export default App;
