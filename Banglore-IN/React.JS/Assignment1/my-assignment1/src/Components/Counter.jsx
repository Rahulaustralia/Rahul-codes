import React  ,{useState} from 'react'

const Counter = () => {
   

    let [count, setCount] = useState(10)
    function incr(){
        setCount(count+1);
        console.log(count)
    }
    function dec(){
        setCount(count-1);
        console.log(count)
    }
    return (
    <div>
      <h1>Count  {count} </h1>
      <button onClick={incr}>+</button>
      <button onClick={dec}> -</button>
    </div>
  )
}

export default Counter
