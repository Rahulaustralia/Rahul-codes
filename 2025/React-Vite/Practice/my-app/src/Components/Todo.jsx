import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState("");

  const handleAdd = () => {
    if (text) {
      if (edit) {
        let myData = data.map((el) => {
          if (edit.text === el.text) {
            edit.text = text;
            return el;
          } else {
            return el;
          }
        });
        setData(myData);
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
    const DeleteData = data.filter((item) => {
      return item.id !== id;
    });
    setData(DeleteData);
  };

  const handleEdit = (id) => {
    let UpdateData = data.find((item) => {
      return item.id === id;
    });
    setText(UpdateData.text);
    setEdit(UpdateData);
  };

  return (
    <div>
      <h1> My Todo App </h1>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Enter Any Text"
      />
      <button onClick={handleAdd}>{edit ? "Edit Todo" : "Add Todo"}</button>
      <div>
        <table border={2} cellPadding={5} cellSpacing={5}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Todo Data</th>
              <th>Delete Data</th>
              <th>Edit Data</th>
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

export default Todo;
