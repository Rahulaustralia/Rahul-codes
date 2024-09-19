import React, { useState } from "react";

const Form = () => {
  const initial = {
    userName: "",
    password: "",
  };

  const [myForm, setMyForm] = useState(initial);

  const { userName, password } = myForm;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMyForm({
      ...myForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", myForm);
  };

  return (
    <div>
      <h1> React Form </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={userName}
          name="userName"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          name="password"
          onChange={handleChange}
        />
        <br />
        <button type="submit"> Submit </button>
      </form>
      {/* 7060370585; */}
    </div>
  );
};

export default Form;
