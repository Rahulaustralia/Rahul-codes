import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
import "./Style/Header.css";
import "./Style/Navbar.css";
import "./Style/Footer.css";
import "./Style/Product.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Product />
      <Footer />
    </div>
  );
};

export default App;
