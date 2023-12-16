import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { text: action.text }];
    case "REMOVE":
      return state.filter((_, i) => i !== action.i);
    default:
      return state;
  }
}

const Todo_useReducer = () => {
  const [text, setText] = useState("");

  const [state, dispatch] = useReducer(reducer, []);

  function handlerChange(e) {
    setText(e.target.value);
  }

  function handleAdd() {
    dispatch({ type: "ADD", text: text });
    setText("");
  }

  function handleRemove(i) {
    dispatch({ type: "REMOVE", i: i });
  }

  return (
    <>
      <div>
        <input
          className="form-control w-25"
          type="text"
          value={text}
          onChange={handlerChange}
        />
        <button className="btn btn-success" onClick={handleAdd}>
          Add{" "}
        </button>
        <div>
          {state.length > 0 ? (
            state.map((item, i) => {
              return (
                <>
                  <div style={{ display: "flex", padding: "10px" }}>
                    <h1 key={i}> {item.text} </h1>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemove(i)}
                    >
                      Remove
                    </button>
                  </div>
                </>
              );
            })
          ) : (
            <h1>No Todo Available </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Todo_useReducer;
