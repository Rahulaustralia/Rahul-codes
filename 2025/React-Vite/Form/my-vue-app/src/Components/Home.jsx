import React, { useState } from "react";

const Home = () => {
  const [showData, setShowData] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const commanHandler = (e) => {
    setFormData((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowData(true);
    // setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div>
      <form action="">
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          onChange={commanHandler}
        />
        <br />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          onChange={commanHandler}
        />
        <br />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          onChange={commanHandler}
        />
        <br />
        <button onClick={handleClick}>Submit</button>
      </form>
      {showData ? JSON.stringify(formData, null, 4) : null}
    </div>
  );
};

export default Home;
