import React from 'react'

const EventHendling = () => {
    function print(){
        console.log("Hello world")
    }
    function textHendler(e){
        console.log("Hello i am Hendeler", e.target.value)
    }
  return (
    <div>
      <h1> Event Handling </h1>
      <button onClick={print}>Click Hear</button>
      <p>Pass Payload in Event</p>
      <button onClick={()=>{
        print('Rahul')
      }}> Click Me 2</button>

      <input type="text" onChange={textHendler} />
    </div>
  )
}

export default EventHendling
