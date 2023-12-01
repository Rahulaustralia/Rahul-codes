import React, { useState } from 'react'

const Button = () => {

    let arr = [
        { id: 1, color: "white" },
        { id: 2, color: "blue" },
        { id: 3, color: "green" },
        { id: 4, color: "orange" },
        { id: 5, color: "pink" },
        { id: 6, color: "yellow" },
        { id: 7, color: "black" },
        { id: 8, color: "gold" },
        { id: 9, color: "red" },
      ];
      let myStyle ={
        width:"600px",
        margin:"auto",
        display:"grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap:"30px 60px",
        marginTop:"50px"

      }
      
      let [myColor,setMyColor] = useState(arr[0].color)

      function hendleClick(color){
        setMyColor(color)
      }
    
  return (
    <div> 
        <div style={{width:"600px",height:"200px",border:"10px solid black",margin:"auto", backgroundColor:myColor}}>

        </div>
    <div id='child' style={myStyle}>
        {arr.map((el)=>(
            <button onClick={()=>hendleClick(el.color)} style={{width:"150px",padding:"8px",fontSize:"20px", borderRadius:"20px",backgroundColor:el.color,fontWeight:"bold", color:"lightgray"}}> {el.color} </button>
        ))}
    </div>
    </div>
  )
}

export default Button
