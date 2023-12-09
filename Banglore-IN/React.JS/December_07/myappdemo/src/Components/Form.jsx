import React, { useState } from "react";

const Form = () => {
  const [num, setNum] = useState();
  const [text, setText] = useState(0);
  const [count, setCount] = useState(0);

  const [togell, setTogell] = useState(false);
  function handleChange(e) {
    console.log(e.target.value);
    setNum(e.target.value);
  }

  function handleSubmit() {
    if (num === 0) {
      alert("Number should be grater then 0");
    } else {
      setText(num);
    }
  }

  function handleInc() {
    setCount(Number(count) + Number(text));
  }

  function handleDec() {
    setCount(Number(count) - Number(text));
  }

  return (
    <div>
      <div>
        <input
          className="form-control w-25"
          onChange={handleChange}
          value={num}
          type="number"
          placeholder="Enter any Number"
        />
        <button className="btn btn-primary w-25 mt-3" onClick={handleSubmit}>
          Submit
        </button>
        <br />
        <br />
        <h1>{count}</h1>
        <button className="btn btn-success w-25" onClick={handleInc}>
          Inc
        </button>
        <button
          className="btn btn-danger w-25"
          onClick={handleDec}
          disabled={count === 0}
        >
          Dec
        </button>
        {count === 0 ? (
          <h5 style={{ color: "red" }}>Number must be Positive </h5>
        ) : (
          <p></p>
        )}
        <hr />
        <hr />
      </div>
    </div>
  );
};

export default Form;
