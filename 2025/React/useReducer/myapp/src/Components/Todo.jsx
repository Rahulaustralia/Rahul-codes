import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1> Todo App </h1>
      <input
        type="text"
        placeholder="Enter any thing in todo"
        onChange={handleChange}
      />
      <button>submit</button>
      <br />
      <div></div>
    </>
  );
};

export default Todo;
