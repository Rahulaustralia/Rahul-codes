import React, { useEffect, useState } from "react";

const Test1 = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((MyData) => {
        setData(MyData.products);
        setFilterData(MyData.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   const applyFilter = (searchText, selectedCategory) => {
  //     let result = data;

  //     if (selectedCategory !== "all") {
  //       result = result.filter((el) => el.category === selectedCategory);
  //     }

  //    if (searchText.trim() !== "") {
  //       result = result.filter((item) =>
  //         item.brand.toLowerCase().includes(searchText.toLowerCase())
  //       );

  // };

  const handleCategory = (e) => {
    const myVal = e.target.value;

    if (myVal === "all") {
      setFilterData(data);
    } else {
      const myFilter = data.filter((el) => {
        return myVal === el.category;
      });
      setFilterData(myFilter);
    }
  };

  const handleSerch = (e) => {
    const mySerch = e.target.value;

    setText(mySerch);

    const SerchData = data.filter((item) =>
      item.brand.toLowerCase().includes(mySerch.toLowerCase())
    );
    setFilterData(SerchData);
  };

  return (
    <div>
      <h1> Interview </h1>

      <select onChange={handleCategory}>
        <option value="all">all</option>
        <option value="beauty">beauty</option>
        <option value="fragrances">fragrances</option>
        <option value="groceries">groceries</option>
      </select>
      <input
        type="text"
        placeholder="Search Brand"
        value={text}
        onChange={handleSerch}
      />
      <div>
        <table border={2} cellPadding={5} cellSpacing={5}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.price}</td>
                  <td>{el.brand}</td>
                  <td>{el.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Test1;
