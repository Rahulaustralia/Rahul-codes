import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [data, edit]);

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
    const EditData = data.find((el) => {
      return el.id === id;
    });
    setText(EditData.text);
    setEdit(EditData);
    inputRef.current.focus();
  };

  return (
    <div>
      <h1> Todo App</h1>
      <input
        type="text"
        value={text}
        ref={inputRef}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="Enter any text"
      />
      <button onClick={handleAdd}>{edit ? "Edit Todo" : "Add Todo"}</button>
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

export default Home;
