import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState("");

  const handleAdd = () => {
    if (text) {
      if (edit) {
        const UpdateData = data.map((el) => {
          if (edit.id === el.id) {
            el.text = text;
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
    const DeleteData = data.filter((item) => {
      return item.id !== id;
    });

    setData(DeleteData);
  };

  const handleEdit = (id) => {
    const EditData = data.find((item) => {
      return item.id === id;
    });
    setData(EditData.text);
    setEdit(EditData);
  };

  return (
    <div>
      <h1>My Todo App </h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Any Text"
      />
      <button onClick={handleAdd}>{edit ? "Edit Todo" : "Add Todo"}</button>
      <div>
        {data.length === 0 ? (
          <h1> No Data Found </h1>
        ) : (
          <table border={2} cellPadding={5} cellSpacing={5}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Todo Data</th>
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
        )}
      </div>
    </div>
  );
};

export default Todo;
