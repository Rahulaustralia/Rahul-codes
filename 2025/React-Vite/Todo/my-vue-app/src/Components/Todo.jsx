import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState("");

  const handleAdd = () => {
    if (text) {
      if (edit) {
        const updateData = data.map((item) => {
          if (edit.id === item.id) {
            item.text = text;
            return item;
          } else {
            return item;
          }
        });
        setData(updateData);
        setEdit("");
        setText("");
      } else {
        const obj = { id: Math.trunc(Math.random() * 1000), text };
        setData([...data, obj]);
        setText("");
      }
    }
  };
  function handleDelete(id) {
    const filterData = data.filter((item) => {
      return item.id !== id;
    });
    setData(filterData);
  }
  function handleEdit(id) {
    const EditData = data.find((item) => {
      return item.id === id;
    });
    setText(EditData.text);
    setEdit(EditData);
  }

  console.log(data);

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Enter Text for Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "5px" }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
      />
      <button
        onClick={handleAdd}
        style={{
          padding: "5px",
          backgroundColor: "blue",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {edit ? "EDIT" : "Add Todo"}
      </button>
      <br />
      <br />
      <div>
        {data.length === 0 && <h1>No data is added...</h1>}
        {data.map((item) => {
          return (
            <ul
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
              key={item.id}
            >
              <li>{item.text}</li>
              <li>
                <button
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    handleEdit(item.id);
                  }}
                >
                  EditButton
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
