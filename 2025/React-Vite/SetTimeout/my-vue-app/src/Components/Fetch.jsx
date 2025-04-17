import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  const [gender, setGender] = useState("");
  const [sortData, setSortData] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((myData) => {
        setData(myData.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const FilterData =
    gender && gender !== "all"
      ? data.filter(
          (user) => user.gender.toLowerCase() === gender.toLowerCase()
        )
      : data;

  const SortOrder = [...FilterData].sort((a, b) => {
    if (sortData === "1_10") {
      return a.age - b.age;
    } else if (sortData === "10_1") {
      return b.age - a.age;
    }
    return 0;
  });

  const handleLowtoHigh = () => {
    setSortData("1_10");
  };
  const handleHighToLow = () => {
    setSortData("10_1");
  };
  return (
    <div>
      <h1> Fetch API </h1>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="all">All</option>
        <option value="male">Male</option>
        <option value="Female">Female</option>
      </select>

      <br />
      <button
        style={{
          background: "blue",
          color: "white",
          padding: "5px",
          fontWeight: "bold",
          borderRadius: "5px",
          margin: "10px",
          border: "none",
        }}
        onClick={handleHighToLow}
      >
        High To Low
      </button>
      <button
        style={{
          background: "red",
          color: "white",
          padding: "5px",
          fontWeight: "bold",
          borderRadius: "5px",
          margin: "10px",
          border: "none",
        }}
        onClick={handleLowtoHigh}
      >
        Low To High
      </button>

      <input
        type="text"
        name=""
        placeholder="Enter First Name"
        style={{
          background: "orange",
          padding: "5px",
          fontWeight: "bold",
          borderRadius: "5px",
          margin: "10px",
        }}
        onChange={(e) => setText(e.target.value)}
      />

      <table border={2} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>id</th>
            <th>firstName</th>
            <th>gender</th>
            <th>age</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {SortOrder.filter((user) =>
            user.firstName.toLowerCase().includes(text.toLowerCase())
          ).map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.firstName}</td>
                <td>{el.gender}</td>
                <td>{el.age}</td>
                <td>{el.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Fetch;
