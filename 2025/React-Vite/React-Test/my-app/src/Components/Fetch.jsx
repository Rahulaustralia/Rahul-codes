import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [updatedData, setUpdatedData] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((myData) => {
        setData(myData.products);
        setUpdatedData(myData.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  const handleChange = (e) => {
    const myVal = e.target.value.toLowerCase();
    setText(myVal);
    const mySerch = data.filter((el) => {
      return el.title.toLowerCase().includes(text);
    });

    setUpdatedData(mySerch);
  };

  const handleSerch = (e) => {
    const serchData = e.target.value;
    setCategory(serchData);

    if (serchData === "all") {
      setUpdatedData(data);
    } else {
      const mySerch = data.filter((el) => {
        return el.category === serchData;
      });
      setUpdatedData(mySerch);
    }
  };

  return (
    <div>
      <h1> My Fetch Data </h1>
      <br />
      <label htmlFor="">Search Products :</label>
      <input
        type="text"
        placeholder="Search hear"
        onChange={handleChange}
        value={text}
      />
      <br />
      <label htmlFor="">Select Category :</label>
      <select
        style={{ width: "170px", padding: "5px", fontWeight: "bold" }}
        name=""
        id=""
        onChange={handleSerch}
      >
        <option value="all">all</option>
        <option value="beauty">beauty</option>
        <option value="fragrances">fragrances</option>
        <option value="furniture">furniture</option>
        <option value="groceries">groceries</option>
      </select>
      <br />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "5px",
        }}
      >
        {updatedData.length === 0 ? (
          <h1> No Data Found </h1>
        ) : (
          updatedData.map((el) => {
            return (
              <div key={el.id} style={{ border: "2px solid orange" }}>
                <h2 style={{ color: "blue", textAlign: "center" }}>
                  Title: {el.title}
                </h2>
                <p style={{ color: "red", textAlign: "center" }}>
                  category: {el.category}
                </p>
                <img
                  src={el.images[0]}
                  alt="error"
                  style={{
                    height: "150px",
                    width: "200px",
                    marginLeft: "140px",
                  }}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Fetch;
