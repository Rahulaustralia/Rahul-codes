import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Five = () => {
  let [form, setForm] = useState({
    name: "",
    email: "",
    pass: "",
    cpass: "",
    pnum: "",
  });
  let globArray = [];
  function commonHandler(e) {
    let { name, value } = e.target;
    setForm((pre) => {
      return { ...pre, [name]: value };
    });
  }

  function handleClick() {
    setForm({ name: "", email: "", pass: "", cpass: "", pnum: "" });
    console.log(form);

    globArray.push(form);
    console.log(globArray);
  }

  return (
    <div>
      <h1> Five </h1>
      <div className="container w-50 mt-5">
        <label className="form-label" htmlFor="">
          UserName
        </label>
        <input
          onChange={commonHandler}
          className="form-control"
          type="text"
          placeholder="Enter Your Name"
          name="name"
        />
        <label className="form-label" htmlFor="">
          Email
        </label>
        <input
          onChange={commonHandler}
          className="form-control"
          type="email"
          placeholder="Enter Your Email"
          name="email"
        />
        <label className="form-label" htmlFor="">
          Password
        </label>
        <input
          onClick={commonHandler}
          className="form-control"
          type="password"
          placeholder="Enter Your Password"
          name="pass"
        />
        <label className="form-label" htmlFor="">
          Confirm Password
        </label>
        <input
          onClick={commonHandler}
          className="form-control"
          type="password"
          placeholder="Enter Your Confirm Password"
          name="cpass"
        />
        <label className="form-label" htmlFor="">
          Phone No.
        </label>
        <input
          onChange={commonHandler}
          className="form-control"
          type="number"
          placeholder="Enter Your Phone Number"
          name="pnum"
        />
        <button onClick={handleClick} className="btn btn-primary w-100 mt-5">
          Submit
        </button>
      </div>
      <div>
        {globArray.map((item, i) => {
          return (
            <>
              <div>
                <h1>{item.name}</h1>
                <p>{item.email}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Five;
