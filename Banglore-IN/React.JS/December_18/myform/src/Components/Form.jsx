import React, { useState } from "react";

const Form = () => {
  let [arr, setArr] = useState([]);
  let [form, setForm] = useState({ opt: "", price: "", date: "" });

  function commonHandler(e) {
    let { name, value } = e.target;
    setForm((pre) => {
      return { ...pre, [name]: value };
    });
  }

  function handleClick() {
    console.log(form);
    setArr((prevArr) => [...prevArr, form]);
    setForm({ opt: "", price: "", date: "" });
  }

  function optionHandle(e) {
    console.log(e.target.value);
    let val = e.target.value;

    arr.filter((item, i) => {
      return <></>;
    });
  }

  return (
    <>
      <div id="form">
        <label>Subscribe</label>
        <select name="opt" onChange={commonHandler}>
          <option>Select</option>
          <option value="1-Year">1-Year</option>
          <option value="6-Month">6-Month</option>
          <option value="3-Month">3-Month</option>
        </select>
        <br />
        <label>Price</label>
        <input
          type="number"
          name="price"
          placeholder="Enter The Price"
          onChange={commonHandler}
        />
        <br />
        <label>Date</label>
        <input type="date" name="date" onChange={commonHandler} />
        <br />
        <button onClick={handleClick}>Submit</button>
      </div>
      <div>
        <select name="" onChange={optionHandle} id="select">
          <option value="All">All</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        {arr.length > 0 ? (
          arr.map((item, i) => {
            return (
              <>
                <div
                  key={i}
                  style={{ border: "1px solid black", borderRadius: "10px" }}
                >
                  <h1 style={{ color: "red" }}>Subscribe:-{item.opt}</h1>
                  <h2 style={{ color: "green" }}> Price:- {item.price} </h2>
                  <h3 style={{ color: "blue" }}>Date:-{item.date}</h3>
                </div>
              </>
            );
          })
        ) : (
          <h2>No Data Found</h2>
        )}
      </div>
    </>
  );
};

export default Form;
