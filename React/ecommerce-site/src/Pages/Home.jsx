import React from 'react'
import { AuthContext } from '../Context/AuthContext' 
import { Navigate } from 'react-router-dom';

const Home = () => {

 const { isAuth,toggleAuth} = AuthContext(AuthContext); 
  
 if(!isAuth){
    return <Navigate to="/"/>
 }

  return (
    <div>
      <h1> Home Page </h1>
      <button onClick={toggleAuth}> LOG OUT </button>
    </div>
  )
}

export default Home
