import React, { useEffect, useState } from "react";

const Assignment = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [updateData, setUpdateData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((mydata) => {
        setData(mydata);
        setUpdateData(mydata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(data);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setText(value);

    const filtered = data.filter((el) =>
      el.login.toLowerCase().includes(value)
    );

    setUpdateData(filtered);
  };

  return (
    <div>
      <h1> Assignment </h1>
      <p>
        Real-Time Search with API <br />
        Problem Statement: Fetch a list of GitHub users from the API and filter
        results as the user types.
        <br />
        ✅ Input field to search users by name.
        <br />
        ✅ Fetch data from https://api.github.com/users (or a similar API).
        <br />
        ✅ Display matching results dynamically.
        <br />
        ✅ Show "No users found" if there are no matches.
        <br />
        🔹 Bonus: Add a loading state while fetching data
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "5px",
        }}
      >
        <br />
        <input
          type="text"
          placeholder="Enter any name"
          onChange={handleChange}
          value={text}
        />
        <br />
        {updateData.length === 0 ? (
          <p> No data found </p>
        ) : (
          updateData.map((el) => {
            return (
              <div key={el.id} style={{ border: "2px solid black" }}>
                <h2> ID: {el.id}</h2>
                <p style={{ fontWeight: "bold", color: "red" }}>
                  Name: {el.login}
                </p>
                <img
                  src={el.avatar_url}
                  alt="err"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Assignment;
