import React, { useRef, useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);
  const inputRef = useRef(null);

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
        setEdit(null);
      } else {
        const obj = { id: Math.trunc(Math.random() * 1000), text };
        setData([...data, obj]);
        setText("");
      }
    }
  };

  const handleDelete = (id) => {
    const DeleteData = data.filter((el) => {
      return el.id != id;
    });
    setData(DeleteData);
  };

  const handleEdit = (id) => {
    const EditData = data.find((el) => {
      return el.id === id;
    });
    setText(EditData.text);
    setEdit(EditData);
  };

  return (
    <div>
      <h1> Todo App </h1>
      <input
        type="text"
        placeholder="Enter Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={inputRef}
      />
      <button onClick={handleAdd}>{edit ? "Edit Todo" : "Add Todo"}</button>
      <br />
      <br />
      <div>
        <table border={2} cellPadding={2} cellSpacing={2}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Todo Data</th>
              <th>Delete Todo</th>
              <th>Edit Todo</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <h4> No Data Found </h4>
            ) : (
              data.map((el) => {
                return (
                  <tr>
                    <td>{el.id}</td>
                    <td>{el.text}</td>
                    <td>
                      <button onClick={() => handleDelete(el.id)}>
                        Delete
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleEdit(el.id)}>Edit</button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
