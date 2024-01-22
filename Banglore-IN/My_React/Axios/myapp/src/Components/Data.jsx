import React, { useEffect } from "react";
import axios from "axios";
const Data = () => {
  let url = "https://dummyjson.com/products";
  async function getData() {
    let res = await axios(url, { method: "GET" });
    let result = res.json();
    console.log(result);
  }
  useEffect(() => {
    getData();
  });
  return <div>Data</div>;
};

export default Data;
