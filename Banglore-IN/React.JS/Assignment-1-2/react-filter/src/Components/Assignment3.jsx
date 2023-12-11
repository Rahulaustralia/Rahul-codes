import React, { useState } from "react";

let arr = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Priyanshu" },
  { id: 3, name: "Rohit" },
  { id: 4, name: "Raju" },
  { id: 5, name: "Raj" },
  { id: 6, name: "Pappu" },
  { id: 7, name: "Virat" },
];
const Assignment3 = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState(arr);

  function handleClick() {
    let filterData = arr.filter((ele, i) => {
      return ele.name === text;
    });
    // console.log(filterData);
    setData(filterData);
    console.log(data);
  }
  function handleChange(e) {
    // console.log(e.target.value)
    setText(e.target.value);
  }
  // console.log(text)
  return (
    <div>
      <h1> Assignment - 3 </h1>
      <input
        type="text"
        placeholder="Search name like rahul"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>

      <div>
        {data.map((ele, i) => {
          return (
            <>
              <div>
                <h1>Name:- {ele.name}</h1>
                <p>Id:- {ele.id}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Assignment3;
