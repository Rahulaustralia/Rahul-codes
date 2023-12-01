import React, { useState } from 'react'

const Form = () => {
    let [name,setName]= useState("")
    function usernameHandler(e){
        console.log(e.target.value);
        setName(e.target.value)
    }
    function submitHandler(){
        console.log(name)
    }
  return (
    <div>
      UserName:<input type='text' onChange={usernameHandler} placeholder='Enter Your User Name'/>
      Email:<input type='email' placeholder='Enter Your Email'/>
      Password:<input type='password' placeholder='Enter Your Password'/>
      Conform Password:<input type='password' placeholder='Enter Your Conform Password'/>
      <select onChange={usernameHandler}>
        <option>Select</option>
        <option value="html">html</option>
        <option value="css">css</option>
        <option value="js">js</option>
      </select>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Form
