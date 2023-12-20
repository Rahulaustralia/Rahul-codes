import React from "react";

function Print({ incHandler }) {
  console.log("hello i am print");
  return (
    <div>
      <button onClick={incHandler}>incHandler</button>
    </div>
  );
}

export default React.memo(Print);

// import React from 'react'

// function Print() {
//     console.log('hello i am print')
//   return (
//     <div>Print</div>
//   )
// }

// export default  Memorize= React.memo(Print)

//import React from 'react'
import { useMemo } from "react";
import { useState } from "react";

function Memo() {
  let [couter, setCouter] = useState(1);
  let value = 1;
  let genrateNumber = useMemo(() => {
    console.log("hello genrateNumber");
    for (let i = 0; i <= 50000000; i++) {
      value++;
    }
    return value;
  }, []);

  return (
    <div>
      <h1>value:{genrateNumber}</h1>
    </div>
  );
}

export default Memo;

//

import React from "react";
import Print from "./Print";
import { useState } from "react";
import { useCallback } from "react";
import Memo from "./Memo";

function Counter() {
  console.log("hello i am counter");
  let [count, setCount] = useState(1);
  let [input, setInput] = useState("");
  let incHandler = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  function inputHandler(e) {
    setInput(e.target.value);
  }
  return (
    <div>
      Counter {count}
      <br />
      <Print incHandler={incHandler} />
      <br />
      <Memo />
      {/* <input type='text' placeholder='enter your name' onChange={inputHandler} /> */}
      <br />
    </div>
  );
}

export default Counter;
