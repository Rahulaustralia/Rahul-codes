import React, { useRef, useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState("");

  const myRef = useRef();

  const handleAdd = () => {
    const obj = { id: Math.trunc(Math.random() * 1000), text };

    setData([...data, obj]);
    setText("");
    myRef.current.focus();
  };

  const handleDelete = (id) => {
    const DeleteTodo = data.filter((el) => {
      return el.id !== id;
    });
    setData(DeleteTodo);
  };

  const handleDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
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
      <h1> My Todo </h1>
      <input
        type="text"
        placeholder="Enter Any Text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyDown={handleDown}
      />
      <button onClick={handleAdd}>Add Todo</button>

      <div>
        <table border={3} cellPadding={5} cellSpacing={5}>
          <thead>
            <tr style={{ backgroundColor: "black", color: "yellow" }}>
              <th>ID</th>
              <th>Todo Data</th>
              <th>Delete Todo</th>
              <th>Edit Todo</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el) => {
              return (
                <tr key={el.id} style={{ backgroundColor: "lightskyblue" }}>
                  <td>{el.id}</td>
                  <td>{el.text}</td>
                  <td>
                    <button
                      style={{
                        backgroundColor: "red",
                        fontWeight: "bold",
                        color: "white",
                        border: "none",
                        width: "100%",
                        padding: "5px",
                      }}
                      onClick={() => handleDelete(el.id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      style={{
                        backgroundColor: "green",
                        fontWeight: "bold",
                        color: "white",
                        border: "none",
                        width: "100%",
                        padding: "5px",
                      }}
                      onClick={() => handleEdit(el.id)}
                    >
                      Edit
                    </button>
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
