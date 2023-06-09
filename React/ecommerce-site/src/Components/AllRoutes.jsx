import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import Products from '../Pages/Products'
import SingleProduct from '../Pages/SingleProduct'
import NotFound from '../Pages/NotFound'



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}>  </Route>
      <Route path="/about" element={<About/>}>  </Route>
      <Route path="/Contact" element={<Contact/>}>  </Route>
      <Route path="/login" element={<Login/>}>  </Route>
      <Route path="/products" element={<Products/>}>  </Route>
      <Route path="/products/:product_id" element={<SingleProduct/>}>  </Route>
      <Route path="*" element={<NotFound/>}>  </Route>
    </Routes>
  );
};

export default AllRoutes
