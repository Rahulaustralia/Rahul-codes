import React from 'react'

const Test = () => {
    let student = {name:'Rahul',age:30,address:"Indore"}
    let displayObj=[]
    for(let i in student){
        displayObj.push(<li>{i}: {student[i]}</li>)
    }
  return (
    <>
     
     <div>
        <h2>Student Details</h2>
        <ul>
          {Object.entries(student).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      </div>


       {/* {displayObj} */}
        

        {Object.keys(student).map(e=>{
            return <li>{e}: {student[e]}</li>
        })}
     
       <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6197eddc0cf4320b6e59ac29bbc55cf_9366/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE0098_21_model.jpg" alt='img' height={400} width={400}style={{marginLeft:"37%",borderRadius:"20px"}} />
        <h1 style={{textAlign:"center"}}> Ghante Ka King </h1>
    </>
  )
}

export default Test
