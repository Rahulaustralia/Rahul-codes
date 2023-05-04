import React from 'react'
import { Link } from 'react-router-dom'

 const links =[
 {path:"/", title:"Home"},
 {path:"/about", title:"About"},
 {path:"/contact", title:"Contact"},
 {path:"/products", title:"Product"},
 {path:"/login", title:"Login"},
]
 
let styles ={
    display: "flex",
    justifyContent: "space-evenly",
    
    backgroundColor:"black",
    color:"white",
    padding:"13px"
}

const Navbar = () => {
  return (
    <div style={styles}>
      {links.map((link)=>(
        <Link style={{color:"white",textDecoration:"none",fontWeight:"bold"}} key={link.path} to ={link.path}>
            {link.title}
        </Link>
      ))}
    </div>
  )
}

export default Navbar
