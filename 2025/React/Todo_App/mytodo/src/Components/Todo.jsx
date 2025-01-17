import React, { useState } from "react";

const Todo = () => {
  const [data, setData] = useState("");

  const [myData, setMyData] = useState([]);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = () => {
    if (data) {
      setMyData([...myData, data]);
      setData("");
    }
  };

  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={data}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Submit</button>
      <div>
        <ul>
          {myData.map((el, i) => {
            return (
              <>
                <li key={el.i}>{el}</li>
                <button>Delete</button>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Todo;
