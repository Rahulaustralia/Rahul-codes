import React, { useRef, useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState("");
  const buttonRef = useRef(null);

  const handleAdd = () => {
    if (text) {
      if (edit) {
        const UpdateTodo = data.map((el) => {
          if (edit.id === el.id) {
            edit.text = text;
            return el;
          } else {
            return el;
          }
        });
        setData(UpdateTodo);
        setEdit("");
        setText("");
      } else {
        let obj = { id: Math.trunc(Math.random() * 1000), text };
        setData([...data, obj]);
        setText("");
      }
    }
  };

  const handleDelete = (id) => {
    const DeleteTodo = data.filter((item) => {
      return item.id !== id;
    });
    setData(DeleteTodo);
  };

  const handleEdit = (id) => {
    const EditTodo = data.find((el) => {
      return el.id === id;
    });
    setText(EditTodo.text);
    setEdit("");
  };

  return (
    <div>
      <h1>My Todo</h1>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Enter Todo data"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            buttonRef.current.click();
          }
        }}
      />

      <button onClick={handleAdd} ref={buttonRef}>
        {edit ? "Edit Todo" : "Add Todo"}
      </button>

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
            {data.length === 0
              ? "No Data Found"
              : data.map((el) => {
                  return (
                    <tr key={el.id}>
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
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
