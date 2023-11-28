//looping
import React from 'react'

function Looping() {
    let arr=[{id:1,prodName:"nike",img:"https://media.istockphoto.com/id/1355687112/photo/various-sport-equipment-gear.webp?b=1&s=170667a&w=0&k=20&c=hEADFXL4HG9mF94yC5g3JA8lMHn8OZg7hRLoiel_L48=",price:7000},
    {id:2,prodName:"adidas",img:"https://media.istockphoto.com/id/1355687112/photo/various-sport-equipment-gear.webp?b=1&s=170667a&w=0&k=20&c=hEADFXL4HG9mF94yC5g3JA8lMHn8OZg7hRLoiel_L48=",price:5000},
    {id:3,prodName:"puma",img:"https://media.istockphoto.com/id/1355687112/photo/various-sport-equipment-gear.webp?b=1&s=170667a&w=0&k=20&c=hEADFXL4HG9mF94yC5g3JA8lMHn8OZg7hRLoiel_L48=",price:3000}]
  return (
    <div>
           <div>
            <div>
                <div>
                      {
                        arr.map((item,i)=>{
                            return  <div key={i}>
                            <div>
                               <h1> id :{item.id}</h1>
                            </div>
                            <div className="card-body">
                               productName:{item.prodName}
                               <div>
                                <img src={item.img} />
                                price:{item.price}
                               </div>
                            </div>
                        </div>
                        })
                      }
                </div>
            </div>
           </div>
    </div>
  )
}

export default Looping

