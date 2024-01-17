import React, { useReducer, useState } from "react";
const addTodo = (todo) => ({
  type: "ADD",
  payload: todo,
});
function reducerFunction(state, action) {
  switch (action.type) {
    case "ADD": {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
}

const Todo = () => {
  const [state, dispatch] = useReducer(reducerFunction, []);
  const [text, setText] = useState("");

  function handleAdd() {
    const newTodo = {
      id: Math.random() + Date.now() + text,
      tittle: text,
      status: false,
    };

    dispatch(addTodo(newTodo));
  }
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Add Todo"
        />
        <button onClick={handleAdd}> Add Todo</button>
      </div>

      <div>
        {state.map((el) => {
          return (
            <>
              <li key={el.id}>{el.tittle}</li>
              <button> Delete Todo </button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
