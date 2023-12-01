import "./App.css";
import Counter from "./Components/Counter";
import Navbar from "./Components/Navbar";
import Props from "./Components/Props";
import PropsTest from "./Components/PropsTest";
let login = true;
let details = {
  name: "Rahul",
  ads: "Indore",
  age: "20",
};

let myData = {
  id: 1,
  myName: "Rahul Pandey",
  myAddress: "Indore (M.P)",
  myAge: 26,
  myRole: "Fullstack",
};
function App() {
  return (
    <>
      <Navbar />;
      <Counter />;
      <Props auth={login} det={details} />
      <PropsTest data={myData} />
    </>
  );
}

export default App;
