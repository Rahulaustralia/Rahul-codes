import React,{useState} from 'react'

 const getData = () =>{
    return  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res)=> res.json());
 }

const FetchAPI = () => {

 const [data, setData] = useState([]);

 const handleClick = async () =>{
    try{
     const response = await getData();

     console.log(data);
     setData(response);
    } catch(err){
        console.log(err);
    }
 }

 const mystyle={
     display:"grid",
     gridTemplateColumns:"repeat(3,1fr)",
     gap:"10px",
     margin:"10px",
 }
  return (
    <>
    
    <div>
       <h1> Get API Data </h1>
       <button onClick={handleClick}> GET DATA </button>
    </div>
    <div style={mystyle}>
       {data.map((post)=>(
        <div  key={post.id} style={{border:"1px solid black"}}>
           <h1>  {post.name} </h1>
           <h6> {post.username} </h6>
           <p> {post.email} </p> 
           
            </div>

       ))}
    </div>
    </>
  )
}

export default FetchAPI
