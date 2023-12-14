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
        <input type="text" value={text} onChange={handlerChange} />
        <button onClick={handleAdd}>Add </button>
        <div>
          {state.map((item, i) => {
            return (
              <>
                <h1 key={i}> {item.text} </h1>
                <button onClick={() => handleRemove(i)}>Remove</button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo_useReducer;
