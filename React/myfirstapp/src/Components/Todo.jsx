import React from 'react'

const Todo = () => {

  const [text, setText] =React.useState("");
  const [todo, setTodo] =React.useState([]);
  const handleInputChange = (event) => {
    setText(event.target.value)
  }

  const handleClick = () => {
  
    const newTodo = {
      id: Date.now(),
      title: text,
      status: false
    }
    setTodo([...todo, newTodo])
   
  }

 

  return (
    <div>
      <input type="text" value={text}
       onChange={handleInputChange}
      placeholder='Add New Todo' />
      <button onClick={handleClick}> Add Todo </button>
      {/* <h1> {text} </h1> */}

      <div>
        {todo.map((item) => (
          <div key={item.id}>
           <h3> {item.title} </h3> 
           <p> {item.status} </p>
           <p> {item.id} </p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Todo
