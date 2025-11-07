import React, { useRef, useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState("");

  const inputRef = useRef(null);

  const handleAdd = () => {
    if (text) {
      if (edit) {
        const MyEditData = data.map((el) => {
          if (el.id === edit.id) {
            el.text = text;
            return el;
          } else {
            return el;
          }
        });
        setData(MyEditData);
        setEdit("");
        setText("");
      } else {
        let obj = { id: Math.trunc(Math.random() * 1000), text };

        setData([...data, obj]);
        setText("");
      }
    }

    inputRef.current.focus();
  };

  const handleDelete = (id) => {
    const DeletedData = data.filter((el) => {
      return el.id !== id;
    });
    setData(DeletedData);
  };

  const handlekey = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
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
      <h1>My Todo App</h1>

      <input
        type="text"
        placeholder="Enter Text for Todo"
        onChange={(e) => setText(e.target.value)}
        value={text}
        ref={inputRef}
        onKeyDown={handlekey}
      />
      <button onClick={handleAdd}>Add Todo</button>

      <div>
        <table border={2} cellPadding={2} cellSpacing={2}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Todo Data</th>
              <th>Delete Todo</th>
              <th>Edit Todo</th>
            </tr>
          </thead>
          <tbody>
            {data.length == 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No Data Found
                </td>
              </tr>
            ) : (
              data.map((el) => {
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
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
