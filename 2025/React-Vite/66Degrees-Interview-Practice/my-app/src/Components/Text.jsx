import React, { useState } from "react";

const Text = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState("");

  const handleAdd = () => {
    if (text) {
      if (edit) {
        const EditData = data.map((el) => {
          if (edit.id === el.id) {
            edit.text = text;
            return el;
          } else {
            return el;
          }
        });
        setData(EditData);
        setText("");
        setEdit("");
      } else {
        const obj = { id: Math.trunc(Math.random() * 1000), text };
        setData([...data, obj]);
        setText("");
      }
    }
  };

  console.log(data);

  const handleDelete = (id) => {
    const DeleteData = data.filter((el) => {
      return el.id !== id;
    });
    setData(DeleteData);
  };

  const handleEdit = (id) => {
    const UpdateData = data.find((el) => {
      return el.id === id;
    });
    setText(UpdateData.text);
    setEdit(UpdateData);
  };

  return (
    <div>
      <h1> My Test Todo</h1>
      <input
        type="text"
        placeholder="Enter text for Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>

      <div>
        <table border={2} cellPadding={5} cellSpacing={5}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Todo Data</th>
              <th>Delete Todo</th>
              <th>Edit Todo</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.text}</td>
                  <td>
                    <button onClick={() => handleDelete(el.id)}>Delete</button>
                  </td>
                  <td>
                    <button onClick={() => handleEdit(el.id)}>Edit</button>
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

export default Text;
