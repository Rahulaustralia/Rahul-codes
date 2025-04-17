import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState("");

  const handeleAdd = () => {
    if (text.trim === "") {
      setError("Enter Some thing");
      return;
    }
    setTodo([...todo, text]);
    setText("");
    setError("");
  };

  console.log(todo);

  return (
    <div>
      <h1> Todo </h1>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          if (error) setError("");
        }}
        placeholder="Enter Todo Text"
      />
      <button onClick={handeleAdd}>ADD Todo</button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {todo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
