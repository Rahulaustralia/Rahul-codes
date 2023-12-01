import React from 'react'

// const Props = ({auth,det}) => {
   
    const Props = ({auth,det:{name,ads,age}}) => {

  return (
    <>
      <h1>Hello I am Props</h1>
      <p>I this side {auth?"utsav":"Admin"}</p>
      <br />
      <hr />
      <h1> My name is {name} </h1>
      <h1> Location {ads} </h1>
      <h1> Age {age} </h1>
   
    </>
  )
}

export default Props
