import "./App.css";
import MyFetch from "./Components/MyFetch";
import HOCFetch from "./Components/HOCFetch";

function App() {
  return (
    <div className="parent">
      <div className="one">
        <HOCFetch child={<MyFetch />} />
      </div>
      <div className="tow">
        <HOCFetch child={<MyFetch />} />
      </div>
    </div>
  );
}

export default App;
