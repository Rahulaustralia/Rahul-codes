import React, { useState } from "react";

const MyTodo = () => {
  const [text, setText] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [editTodo, setEditTodo] = useState("");

  const handleAddTodo = () => {
    // const obj = { id: Date.now(), text };
    const obj = { id: Math.trunc(Math.random() * 1000), text };
    setTodoData([...todoData, obj]);
    setText("");
  };

  const handleDelete = (id) => {
    const deleteData = todoData.filter((item) => {
      return item.id !== id;
    });
    setTodoData(deleteData);
  };

  const handleEdit = (id) => {
    const EditData = todoData.find((item) => {
      return item.id === id;
    });
    setText(EditData);
    setEditTodo(EditData);
  };

  return (
    <div>
      <h1> My Todo App </h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Any Text"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <div>
        <table border={2} cellPadding={5} cellSpacing={5}>
          <thead>
            <tr>
              <th>Todo Data</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* {todoData.length === 0 && <h1>No Data Found</h1>} */}
            {todoData.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.text}</td>
                  <td>
                    <button onClick={() => handleDelete(el.id)}>Delete</button>
                  </td>
                  <td>
                    <button onClick={() => handleEdit(el.id)}>Update</button>
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

export default MyTodo;
