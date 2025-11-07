import React, { useEffect } from "react";
import "../Style/Product.css";

const Product = () => {
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [text, setText] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [itemsPerPage] = React.useState(3);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((myData) => {
        setData(myData);
        setFilteredData(myData);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSelect = (e) => {
    const category = e.target.value;
    if (category === "all") {
      setFilteredData(data);
    } else {
      const updatedList = data.filter((el) => el.category === category);
      setFilteredData(updatedList);
    }
  };

  const sortHTL = () => {
    const sortedData = [...filteredData].sort((a, b) => {
      return b.price - a.price;
    });
    setFilteredData(sortedData);
  };

  const sortLTH = () => {
    const sortedData = [...filteredData].sort((a, b) => {
      return a.price - b.price;
    });
    setFilteredData(sortedData);
  };

  const handleChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    setText(searchText);
    const myData = data.filter((el) => {
      return el.title.toLowerCase().includes(searchText);
    });
    setFilteredData(myData);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIdx = (page - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  return (
    <div className="product-page">
      <h1 className="product-title">Display Products</h1>
      <div id="mydiv" className="product-layout">
        <div className="filter-section">
          <select className="filter-select" onChange={handleSelect}>
            <option value="all">All</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
          <button className="sort-btn" onClick={sortLTH}>
            Price Low to High
          </button>
          <button className="sort-btn" onClick={sortHTL}>
            Price High to Low
          </button>
          <input
            type="text"
            placeholder="Search Title"
            onChange={handleChange}
            value={text}
          />
        </div>
        <div className="product-section">
          <div className="product-grid">
            {filteredData.slice(startIdx, endIdx).map((el) => (
              <div className="product-card" key={el.id}>
                <img src={el.image} alt={el.title} className="product-img" />
                <div className="product-category">{el.category}</div>
                <div className="product-title-text">{el.title}</div>
                <div className="product-price">${el.price}</div>
              </div>
            ))}
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                className={`pagination-btn${page === idx + 1 ? " active" : ""}`}
                onClick={() => setPage(idx + 1)}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
