import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    const obj = { id: Math.trunc(Math.random() * 1000), text };
    setTodos([...todos, obj]);
    setText("");
  };

  // console.log(todos);

  const handleDelete = (id) => {
    const DeleteData = todos.filter((el) => {
      return el.id !== id;
    });
    setTodos(DeleteData);
  };

  return (
    <div>
      <h1> My Todo App </h1>
      <input
        type="text"
        placeholder="Enter text for todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAdd}>Add Todo</button>
      <div>
        <table border={2} cellPadding={2} cellSpacing={2}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Todo text</th>
              <th>Delete Todo</th>
              <th>Edit Todo</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.id} </td>
                  <td>{el.text}</td>
                  <td>
                    <button onClick={() => handleDelete(el.id)}>Delete</button>
                  </td>
                  <td>
                    <button>Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
