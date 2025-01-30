import React, { useState } from "react";

const Todo = () => {
  const [item, setItem] = useState([]);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    setItem([...item, { id: Date.now(), text }]);
    setText("");
  };

  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Enter any text"
        value={text}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Submit</button>

      <div>
        {item.map((el) => {
          return (
            <div key={el.id}>
              <ul>
                <li>{el.text}</li>
                <li>{el.id}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
