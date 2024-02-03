import React, { useEffect, useState } from "react";
import axios from "axios";
const ProductPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <>
            <h1> {item.title}</h1>
          </>
        );
      })}
    </div>
  );
};

export default ProductPage;
