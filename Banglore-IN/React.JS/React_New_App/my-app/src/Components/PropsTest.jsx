import React from 'react'

const PropsTest = ({data}) => {
   
  return (
    <div style={{backgroundColor:"blue",color:"white"}}>
        <hr />
      <h1> This is From PropsTest </h1>
      <h1>My id is {data.id}</h1>
      <h2> My Name is {data.myName} </h2>
      <h3> I am from {data.myAddress}  </h3>
      <h4> My age is {data.myAge} </h4>
      <h5> I am a {data.myRole} Developer </h5>

    </div>
  )
}

export default PropsTest
