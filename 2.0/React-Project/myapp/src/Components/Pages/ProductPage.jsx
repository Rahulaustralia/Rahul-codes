import React, { useEffect, useState } from "react";
import axios from "axios";
const ProductPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);

  return <div>ProductPage</div>;
};

export default ProductPage;
