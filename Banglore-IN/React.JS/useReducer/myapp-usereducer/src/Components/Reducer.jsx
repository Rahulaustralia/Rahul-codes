import React, { useReducer, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function reducer(state, action) {}

const Reducer = () => {
  let initialValue = {
    arr: [],
  };
  let [state, dispatch] = useReducer(reducer, initialValue);
  let [data, setData] = useState("");
  let [mystate, setMystate] = useState("");
  function handleChange(e) {
    setData(e.target.value);
  }
  function handleClick() {
    setMystate(data);
  }
  return (
    <div>
      <div
        style={{
          margin: "auto",
          border: "1px solid blue",
          width: "350px",
          height: "200px",
          marginTop: "20px",
          padding: "5px",
        }}
      >
        <input
          className="form-control"
          type="text"
          value={data}
          onChange={handleChange}
        />
        <button className="btn btn-danger form-control" onClick={handleClick}>
          {" "}
          Add
        </button>
        <h1> {mystate} </h1>
      </div>
    </div>
  );
};

export default Reducer;
