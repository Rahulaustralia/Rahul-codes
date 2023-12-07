import React, { useState } from 'react'

const Button2 = () => {
   
    let arr =[
        {id:1, name:"Rahul"},
        {id:2, name:"Priyanshu"},
        {id:3, name:"Rohit"},
        {id:4, name:"Raju"},
        {id:5, name:"Raj"},
        {id:6, name:"Pappu"},
        {id:7, name:"Virat"},      
 ]
  
  let styles={
    width:"600px",
    margin:"auto",
    display:"grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap:"30px 60px",
    marginTop:"50px",
  }
   let [data,setData]= useState("")
  //  function myFun(){
  //   console.log(data)
  //  }

   function nameHandler(e){
     console.log(e.target.value)
    setData(e.target.value)
    }
   function myFun(){
    let sortName = arr.filter((item,i)=>{
      console.log(item.name)
        return item.name === setData
      console.log(setData)
    })
    console.log(sortName)
    
   }
  
    return (
    <div>
        <div>
       <input type="text" onChange={nameHandler}/>  
       <button onClick={myFun}>Submit</button>   
        </div>
      <div style={styles}>  
       {arr.map((el)=>(
      <div id='cart' style={{border:"1px solid blue",textAlign:"center"}} > 
      <p> {el.id} </p>
      <h1> {el.name} </h1>
       </div>
       ))}
       </div>
       <div id='sort'>
      
       </div>
    </div>
  )
}

export default Button2
