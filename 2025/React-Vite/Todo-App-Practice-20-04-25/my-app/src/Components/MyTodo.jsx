import React, { useState } from "react";

const MyTodo = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState("");

  const handleAdd = () => {
    if (text) {
      if (edit) {
        let UpdateData = data.map((item) => {
          if (edit.id === item.id) {
            edit.text = text;
            return item;
          } else {
            return item;
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
    let DeleteData = data.filter((item) => {
      return item.id !== id;
    });
    setData(DeleteData);
  };

  const handleEdit = (id) => {
    const EditData = data.find((item) => {
      return item.id === id;
    });
    setText(EditData.text);
    setEdit(EditData);
  };

  console.log(data);

  return (
    <div>
      <h1> My Todo App </h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Text for todo"
      />
      <button onClick={handleAdd}>{edit ? "Update Todo" : "Add Todo"}</button>
      <div>
        {data.length === 0 ? (
          <h1> No Data Found </h1>
        ) : (
          <table border={2} cellPadding={5} cellSpacing={5}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Todo Data</th>
                <th>Delete Data</th>
                <th>Update Data</th>
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

export default MyTodo;
