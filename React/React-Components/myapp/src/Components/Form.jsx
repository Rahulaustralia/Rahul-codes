import React, { useState } from "react";

const Form = () => {
  // State variables to hold email, password, and list of entries
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [entriesList, setEntriesList] = useState([]);

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Add entry containing email, password, and date to the list
    const currentDate = new Date().toLocaleDateString();
    const newEntry = { email, password, date: currentDate };
    setEntriesList([...entriesList, newEntry]);

    // Clear the email and password fields
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {/* Display list of entries */}
      <div>
        <h2>Entries List</h2>
        <ul>
          {entriesList.map((entry, index) => (
            <li key={index}>
              <strong>Email:</strong> {entry.email}, <strong>Password:</strong>{" "}
              {entry.password}, <strong>Date:</strong> {entry.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Form;
