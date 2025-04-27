import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  const [cat, setCat] = useState("All");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((myData) => {
        setData(myData.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSort = (order) => {
    const sortedData = [...data].sort((a, b) => {
      if (order === "HTL") {
        return b.price - a.price;
      } else {
        return a.price - b.price;
      }
    });
    setData(sortedData);
  };

  const handleCat = (e) => {
    const catData = e.target.value;
    setCat(catData);
    if (cat === "All") {
      setFilterData(data);
    } else {
      const myCatData = data.filter((el) => {
        return el.category === catData;
      });
      setFilterData(myCatData);
    }
  };

  return (
    <div>
      <h1>Fetch </h1>
      <div>
        <button onClick={() => handleSort("HTL")}>High to Low</button>
        <button onClick={() => handleSort("LTH")}>Low to High</button>

        <select onChange={handleCat}>
          <option value="All">All</option>
          <option value="groceries">groceries</option>
          <option value="beauty">beauty</option>
          <option value="fragrances">fragrances</option>
        </select>
        <table border={2} cellPadding={5} cellSpacing={5}>
          <thead>
            <tr>
              <th>id</th>
              <th>brand</th>
              <th>category</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {(filterData.length > 0 ? filterData : data).map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.brand}</td>
                  <td>{el.category}</td>
                  <td>{el.price}</td>
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
