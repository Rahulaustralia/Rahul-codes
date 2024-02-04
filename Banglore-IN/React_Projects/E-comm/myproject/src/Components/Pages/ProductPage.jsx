import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style/Product.css";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div className="Product-parent">
      {data.length > 0 &&
        data.map((item) => {
          return (
            <div className="product-child" key={item.id}>
              <img src={item.image} alt="" />
              <h4>Title:- {item.title}</h4>
              <p>Category:- {item.category}</p>
              <h4>Rs. {item.price}</h4>
              <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
                {" "}
                Add To Cart{" "}
              </Button>
            </div>
          );
        })}
      {data.length < 0 && <h1> Loading... </h1>}
    </div>
  );
};

export default ProductPage;
