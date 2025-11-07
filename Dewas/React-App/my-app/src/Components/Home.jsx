import React, { useEffect, useState } from "react";
import "../Style/Home.css";
const Home = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((myData) => {
        setData(myData.products);
        setSortedData(myData.products);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCategory = (e) => {
    const myCategory = e.target.value;

    if (myCategory === "All") {
      setSortedData(data);
    } else {
      const myFilterData = data.filter((el) => {
        return el.category === myCategory;
      });
      setSortedData(myFilterData);
    }
  };

  const handlePrice = (type) => {
    if (type === "HTL") {
      const sortedArray = [...sortedData].sort((a, b) => {
        return b.price - a.price;
      });
      setSortedData(sortedArray);
    } else {
      const sortedArray = [...sortedData].sort((a, b) => {
        return a.price - b.price;
      });
      setSortedData(sortedArray);
    }
  };

  return (
    <div>
      <h1> Fetch API </h1>
      <select onChange={handleCategory}>
        <option value="All">All</option>
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="groceries">Groceries</option>
      </select>
      <br />
      <button onClick={() => handlePrice("HTL")}>Price High to Low</button>
      <button onClick={() => handlePrice("LTH")}>Price Low to High</button>
      <div>
        <table border="2" cellPadding="5" cellSpacing="5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>Images</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((el) => {
              return (
                <tr key={el.id}>
                  <td> {el.id}</td>
                  <td>{el.brand}</td>
                  <td>{el.category}</td>
                  <td>{el.price}</td>
                  <td>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={el.images && el.images.length ? el.images[0] : ""}
                      alt="error"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
