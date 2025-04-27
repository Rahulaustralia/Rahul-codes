import React, { useEffect, useState } from "react";

const Task = () => {
  const [cartData, setCartData] = useState(null);
  const [productsData, setProductsData] = useState([]);
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartResponse = await fetch("https://fakestoreapi.com/carts/2");
        const cartResult = await cartResponse.json();
        setCartData(cartResult);

        const productsResponse = await fetch(
          "https://fakestoreapi.com/products"
        );
        const productsResult = await productsResponse.json();
        setProductsData(productsResult);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (cartData && productsData.length > 0) {
      const updatedProducts = cartData.products.map((cartItem) => {
        const matchedProduct = productsData.find(
          (product) => product.id === cartItem.productId
        );
        return {
          ...cartItem,
          productDetails: matchedProduct,
        };
      });
      setMergedData(updatedProducts);
    }
  }, [cartData, productsData]);

  return (
    <div>
      <h1>Fetch Data</h1>
      <h2>Cart Data:</h2>
      <pre>{JSON.stringify(cartData, null, 2)}</pre>

      <h2>Products Data:</h2>
      {/* <pre>{JSON.stringify(productsData, null, 2)}</pre> */}

      <h2>Merged Cart with Product Details:</h2>
      <pre>{JSON.stringify(mergedData, null, 2)}</pre>
    </div>
  );
};

export default Task;
