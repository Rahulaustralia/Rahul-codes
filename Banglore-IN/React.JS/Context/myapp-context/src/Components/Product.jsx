import React, { useContext } from "react";
import { ContextProduct } from "..";

const Product = () => {
  const data = useContext(ContextProduct);

  console.log(data);
  return (
    <div>
      <h1> Products </h1>
      {/* {data.length === 0 && <h1> Wait For While </h1>}
      {data.length > 0 &&
        data.map((item, i) => {
          return (
            <>
              <h1> {item.category} </h1>
            </>
          );
        })} */}

      {data.map((item, i) => {
        return (
          <>
            <h1> {item.category} </h1>
          </>
        );
      })}
    </div>
  );
};

export default Product;
