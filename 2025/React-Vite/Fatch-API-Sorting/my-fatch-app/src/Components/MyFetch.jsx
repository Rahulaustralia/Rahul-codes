import React, { useEffect, useState } from "react";

const MyFetch = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilterData] = useState([]);
  const [sortData, setSortData] = useState("All");

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
  function handleSort(e) {
    setSortData(e.target.value);
  }
  useEffect(() => {
    const sort_Data = data.filter((item) => {
      return item.role
        .trim()
        .toLowerCase()
        .includes(sortData.toLowerCase().trim());
    });
    setFilterData(sort_Data);
  }, [sortData]);

  return (
    <div>
      <h1> My Fetch API </h1>
      <select onChange={handleSort}>
        <option value="All">All</option>
        <option value="admin">admin</option>
        <option value="moderator">moderator</option>
        <option value="user">user</option>
      </select>
      <table border={2} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>id</th>
            <th>firstName</th>
            <th>gender</th>
            <th>role</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && <>Loading</>}
          {(filteredData.length > 0 ? filteredData : data).map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.firstName}</td>
                <td>{el.gender}</td>
                <td>{el.role}</td>
                <td>{el.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyFetch;
