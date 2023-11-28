import React from 'react'


const Home = () => {
  let arr = [{id:1,brand:"Puma",category:"Men",img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6197eddc0cf4320b6e59ac29bbc55cf_9366/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE0098_21_model.jpg",price:5000},
  {id:1,brand:"Puma",category:"Men",img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f0dec3036b6a4934bffbdbc29b8797c9_9366/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE0098_22_model.jpg",price:4000},
  {id:2,brand:"U.S Polo",category:"Men",img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e7780fb996049f5bc7662ecb284ca35_9366/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE0098_23_hover_model.jpg",price:3000},
  {id:3,brand:"Nike",category:"Women",img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0083cd605bfc40f8afb9e2a0c2070a7b_9366/INDIA_CRICKET_TRI_COLOR_JERSEY_WITH_2_STARS_WOMEN_Blue_JC8811_01_standard.jpg",price:2000},
  {id:4,brand:"Lee",category:"Women",img:"https://hashboosh.com/cdn/shop/files/31_5.jpg?v=1683341181&width=800",price:1000},
  {id:5,brand:"Levi's",category:"kids",img:"https://m.media-amazon.com/images/I/61kqhTCKtgL._AC_UL480_FMwebp_QL65_.jpg",price:500},
  {id:6,brand:"Dream11",category:"kids",img:"https://m.media-amazon.com/images/I/61xoUmgappL._AC_UL480_FMwebp_QL65_.jpg",price:400},
  {id:7,brand:"Dream11",category:"kids",img:"https://m.media-amazon.com/images/I/51b7q2N8pPL._AC_UL480_FMwebp_QL65_.jpg",price:300},
  {id:8,brand:"Addidas",category:"kids",img:"https://m.media-amazon.com/images/I/518Xd9hgamL._AC_UL480_FMwebp_QL65_.jpg",price:200},
  {id:9,brand:"Adidas",category:"Men",img:"https://images.fancode.com/eyJrZXkiOiJtZWRpYS9jYXRhbG9nL3Byb2R1Y3QvY2FjaGUvYzg2NDA4M2JmNzRhZTk3MDM3ZmEyM2JjNTM0MGFlOTUvYy93L2N3YzIzbnRzLTExOF8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjoyNDcsImhlaWdodCI6MzI5LjMzMzMzMzMzMzMzMzN9fSwib3V0cHV0Rm9ybWF0Ijoid2VicCJ9",price:100},
]
  return (
    <div id='parent'>
      <div id='sidebar'>
        <h3> Category </h3>
        <div className='sub'>
        <button>Men's</button>
        <button>Women's</button>
        <button>Kids</button>
        <button>ICC</button>
        </div>
        <br />
        <div className='sub'>  
        <h3> Brand </h3>
        <button>Adidas</button>
        <button>Levi's</button>
        <button>U.S Polo</button>
        <button>Dream11</button>
        </div>
      </div>
      <div id='container'>
        <div id='papa'> 
         {
          arr.map((item,i)=>{
           return  <div  id='card' key={i}>
             <h1> id:{item.id} </h1>
              <img style={{width:"100%"}} src={item.img} alt="error" />
              <h4>Price:{item.price}</h4>
              <button style={{width:"90px",padding:"5px", color:"white", backgroundColor:"red", fontWeight:"bold"}}>Add To Cart</button>
          </div>
        
          })
         }
          </div>
      </div>
    </div>
  )
}

export default Home;
