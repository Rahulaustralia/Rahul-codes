import React, { useRef } from "react";

const Forms = () => {
  const ColorRef = useRef(null);

  return (
    <div>
      <h1 ref={ColorRef}>React From's</h1>
      <button onClick={() => (ColorRef.current.style.color = "red")}>
        Color Change
      </button>

      <form action="">
        <h3>Form</h3>
        <label htmlFor="">Name</label>
        <input type="text" name="name" placeholder="Enter Your Name" />
        <br />
        <label htmlFor="">Email</label>
        <input type="email" name="email" placeholder="Enter Your Email" />
      </form>
    </div>
  );
};

export default Forms;
