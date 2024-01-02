import React, { useState } from "react";

const Form = () => {
  let [form, setForm] = useState({ title: "", price: "", date: "" });
  let globalArr = [];
  function commonHandler(event) {
    let { name, value } = event.target;
    setForm((pre) => {
      return { ...pre, [name]: value };
    });
  }

  function handleSubmit() {
    setForm({ title: "", price: "", date: "" });
    console.log(form);

    globalArr.push(form);
    console.log(globalArr);
  }

  return (
    <div>
      <div>
        <label> Tittle</label>
        <input type="text" name="title" onChange={commonHandler} />
        <br />
        <label htmlFor="">Price</label>
        <input type="number" name="price" onChange={commonHandler} />
        <br />
        <label>Date</label>
        <input type="date" name="date" onChange={commonHandler} />
        <br />
        <button onClick={handleSubmit}> Submit</button>
      </div>
      <div>
        {globalArr.map((el, i) => {
          return (
            <>
              <h1> Title:- {el.title} </h1>
              <p>Price:- {el.price}</p>
              <p>Date:- {el.date}</p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
