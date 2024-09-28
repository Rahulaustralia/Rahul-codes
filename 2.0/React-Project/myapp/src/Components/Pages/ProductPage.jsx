import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style/ProductPage.css";

const ProductPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("'https://dummyjson.com/products").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);

  return (
    <div id="RPContainer">
      {data.map((el) => {
        return (
          <div key={el.id} id="RPchild">
            <img src={el.image} alt="error" />
          </div>
        );
      })}
    </div>
  );
};

export default ProductPage;
