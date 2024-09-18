import React from "react";

const Form = () => {
  return (
    <div>
      <h1> React Form </h1>
      <form action="">
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Enter Your Name" id="" />
        <br />
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter your Password" id="" />
        <br />
        <button> Submit </button>
      </form>
    </div>
  );
};

export default Form;
