import React, { useEffect, useState } from "react";

const MyCom = () => {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((myData) => {
        setData(myData.users);
        setSort(myData.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    const myValue = e.target.value;

    if (myValue === "All") {
      setSort(data);
    } else {
      const mySotedData = data.filter((el) => {
        return el.role === myValue;
      });
      setSort(mySotedData);
    }
  };

  const handleInput = () => {};

  return (
    <div>
      <h1> Interview pre... </h1>

      <select onChange={handleChange}>
        <option value="All">All</option>
        <option value="admin">admin</option>
        <option value="moderator">moderator</option>
        <option value="user">user</option>
      </select>
      <input
        type="text"
        placeholder="Search Any Name"
        value={search}
        onChange={handleInput}
      />
      <div>
        <table border={2} cellPadding={5} cellSpacing={5}>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>age</th>
              <th>gender</th>
              <th>bloodGroup</th>
              <th>role</th>
            </tr>
          </thead>
          <tbody>
            {sort.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.firstName}</td>
                  <td>{el.age}</td>
                  <td>{el.gender}</td>
                  <td>{el.bloodGroup}</td>
                  <td>{el.role}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCom;
