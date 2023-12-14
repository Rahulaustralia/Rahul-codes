import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, actions: [...state.actions] };
    default:
      return state;
  }
};

const Todo_useReducer = () => {
  const [state, dispatch] = useReducer(reducer, { action: [] });

  function handleChange(e) {
    dispatch({ type: "ADD", payload: e.target.value });
  }

  return (
    <div>
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={() => dispatch({ type: "ADD" })}>Add</button>
        <button onClick={() => dispatch({ type: "REMOVE" })}>Remove</button>
      </div>
    </div>
  );
};

export default Todo_useReducer;
