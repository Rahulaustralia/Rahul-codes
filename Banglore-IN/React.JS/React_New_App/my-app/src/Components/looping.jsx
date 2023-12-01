import React from 'react'

const looping = () => {
  let arr = [{name:"Rahul",role:"FSD"},{name:"Vicky",role:"Backend"},{name:"priyanshu",role:"Backend"}];

    return (
    <div>
       <ul>
        {
            arr.map((item)=>{
                return(
                <li> {item.name} </li>
                <li> {item.role} </li>
                )
            })
        }
       </ul>
    </div>
  )
}

export default looping
