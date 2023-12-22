import React, { useContext } from "react";
import ProductContext from "../Context/Product";
const Products = () => {
  let data = useContext(ProductContext);
  console.log(data);
  return (
    <div>
      <h1> Product Page</h1>
      <div>
        {data.map((item) => {
          return (
            <>
              <div key={item.id}>
                <p>{item.id}</p>
                <h1>Title:- {item.title} </h1>
                <img src={item.image} alt="err" />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
