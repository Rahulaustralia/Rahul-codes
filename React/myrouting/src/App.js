import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Products from "./Components/Products";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
