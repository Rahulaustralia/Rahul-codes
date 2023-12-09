import React, { useState } from "react";

const Task4 = () => {
  const [active, setActive] = useState(false);
  const [err, setErr] = useState(false);
  const [err1, setErr1] = useState(false);
  const [err2, setErr2] = useState(false);
  const [err3, setErr3] = useState(false);
  function handleClick() {
    if (active === false) {
      setActive(true);
    } else if (active === true) {
      setActive(false);
    }
  }

  function handleChange1(e) {
    let val1 = e.target.value;

    if (/^\d/.test(val1)) {
      setErr(true);
    } else {
      setErr(false);
      if (val1.length <= 5) {
        setErr1(true);
      } else if (val1.length === 6) {
        setErr1(false);
      }
    }
  }

  function handleChange2(e) {
    let val2 = e.target.value;
    if (val2.length <= 5) {
      setErr2(true);
    } else {
      setErr2(false);
    }
  }

  function handleChange3(e) {
    let val3 = e.target.value;

    if (/^\d/.test(val3)) {
      setErr3(false);
    } else if (val3 > 0) {
      setErr3(true);
    } else {
      setErr3(true);
    }
  }

  function handleOk() {
    alert("Data Submit Successful!");
    setActive(false);
  }

  function handleCancel() {
    setActive(false);
  }

  return (
    <div>
      <div
        style={{
          margin: "auto",
          width: "200px",
          height: "200px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
      >
        <button onClick={handleClick} className="btn btn-danger m-5">
          Toggle{" "}
        </button>

        <div></div>
      </div>
      <br />
      <br />
      <div
        style={{
          margin: "auto",
          width: "330px",
          height: "450px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
          visibility: active === true ? "visible" : "hidden",
          borderRadius: "15px",
          padding: "5px",
        }}
      >
        User{" "}
        <input
          onChange={handleChange1}
          className="form-control"
          type="text"
          placeholder="Enter User Name"
        />
        <p style={{ color: "red" }}>
          {err === true ? "First Character should be String" : ""}
          {err1 === true ? "String must be more then 5" : ""}
        </p>
        <br />
        Password{" "}
        <input
          onChange={handleChange2}
          className="form-control"
          type="password"
          placeholder="Enter Your Password"
        />
        <p style={{ color: "red" }}>
          {" "}
          {err2 === true ? "Password Should be more then 5" : ""}
        </p>
        <br />
        Price
        <input
          onChange={handleChange3}
          className="form-control"
          type="text"
          placeholder="Enter the Price"
          id=""
        />
        <p style={{ color: "red" }}>
          {" "}
          {err3 === true ? "Enter Positive value only" : ""}
        </p>
        <br />
        <br />
        <button onClick={handleCancel} className="btn btn-danger">
          Cancel
        </button>
        <button onClick={handleOk} className="btn btn-success">
          Ok
        </button>
      </div>
    </div>
  );
};

export default Task4;
