import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [myData, setMyData] = useState(null);

  const comHandler = (e) => {
    const { name, value } = e.target;

    setFormData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMyData(formData);
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          onChange={comHandler}
          name="name"
          value={formData.name}
        />

        <br />
        <label htmlFor="">Email</label>
        <input
          type="email"
          onChange={comHandler}
          name="email"
          value={formData.email}
        />
        <br />

        <label htmlFor="">Password</label>
        <input
          type="password"
          onChange={comHandler}
          name="password"
          value={formData.password}
        />
        <br />
        <button type="submit"> Submit</button>
      </form>

      <div>
        {myData && (
          <div style={{ marginTop: "20px" }}>
            <h3>Submitted Data:</h3>
            <p>
              <strong>Name:</strong> {myData.name}
            </p>
            <p>
              <strong>Email:</strong> {myData.email}
            </p>
            <p>
              <strong>Password:</strong> {myData.password}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
