import React, { useRef, useState } from "react";

const Forms = () => {
  const ColorRef = useRef(null);

  const initialState = {
    name: "",
    email: "",
    password: "",
    country: "",
    isMarried: false,
  };

  const [formState, setFormState] = useState(initialState);
  const [fromData, setFromData] = useState([]);

  const { name, email, password, country, isMarried } = formState;

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    let val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: val });
  };

  console.log(formState);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFromData([
      ...FormData,
      { id: Math.trunc(Math.random() * 1000), ...formState },
    ]);
  };

  return (
    <div>
      <h1 ref={ColorRef}>React From's</h1>
      <button onClick={() => (ColorRef.current.style.color = "red")}>
        Color Change
      </button>

      <form onSubmit={handleSubmit}>
        <h3>Form</h3>
        <label htmlFor="">Name </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter Your Name"
        />
        <br />
        <label htmlFor="">Email </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter Your Email"
        />
        <br />
        <label htmlFor="">Password </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter Your Password"
        />
        <br />
        <label htmlFor="">Country </label>
        <select name="country" value={country} onChange={handleChange}>
          <option value="india">India</option>
          <option value="australia">Australia</option>
          <option value="russia">Russia</option>
        </select>
        <br />
        <label>Marital Status</label>
        <input
          type="checkbox"
          name="isMarried"
          checked={isMarried}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>

      <div>
        <table border={2} cellPadding={5} cellSpacing={5}>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Marital Status</th>
            </tr>
          </thead>
          <tbody>
            {fromData.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                  <td>{el.password}</td>
                  <td>{el.isMarried ? "Married" : "Unmarried"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Forms;
