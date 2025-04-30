import React, { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState("");

  const handleAdd = () => {
    if (text) {
      if (edit) {
        const UpdateData = data.map((el) => {
          if (edit.id === el.id) {
            edit.text = text;
            return el;
          } else {
            return el;
          }
        });
        setData(UpdateData);
        setText("");
        setEdit("");
      } else {
        let obj = { id: Math.trunc(Math.random() * 1000), text };
        setData([...data, obj]);
        setText("");
      }
    }
  };

  const handleDelete = (id) => {
    const DeleteTodo = data.filter((el) => {
      return el.id !== id;
    });
    setData(DeleteTodo);
  };

  const handleEdit = (id) => {
    const EditTodo = data.find((el) => {
      return el.id === id;
    });
    setText(EditTodo.text);
    setEdit(EditTodo);
  };

  return (
    <div>
      <h1> Home </h1>
      <h2>My Todo</h2>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Enter Todo Item"
      />
      <button onClick={handleAdd}>{edit ? "Edit Todo" : "Add Todo"}</button>

      <div>
        <table border={2} cellPadding={5} cellSpacing={5}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Todo Data </th>
              <th>Delete Todo</th>
              <th>Update Todo</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.text}</td>
                  <td>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
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

export default Home;
