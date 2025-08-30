import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((myData) => {
        setData(myData.users);
        setFilterData(myData.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  const handleGender = (gender) => {
    if (gender === "all") {
      setFilterData(data);
    } else {
      const genderData = data.filter((el) => el.gender === gender);
      setFilterData(genderData);
    }
  };

  const handleSelect = (e) => {
    const SelectValue = e.target.value;
    if (SelectValue === "all") {
      setFilterData(data);
    } else {
      const FilterSelect = data.filter((el) => el.role === SelectValue);
      setFilterData(FilterSelect);
    }
  };

  const handleSearch = (e) => {
    const SearchValue = e.target.value.toLowerCase();
    setSearchText(SearchValue);

    const ResultValue = data.filter((el) =>
      el.firstName.toLowerCase().includes(SearchValue)
    );
    setFilterData(ResultValue);
  };

  return (
    <div>
      <h1> Fetch And Filter Data </h1>
      <button onClick={() => handleGender("male")}>Male</button>
      <button onClick={() => handleGender("female")}>Female</button>
      <button onClick={() => handleGender("all")}>All</button>
      <br />
      <select onChange={handleSelect}>
        <option value="all">All</option>
        <option value="admin">Admin</option>
        <option value="moderator">Moderator</option>
        <option value="user">User</option>
      </select>
      <br />
      <input
        type="text"
        placeholder="Search Name"
        onChange={handleSearch}
        value={searchText}
      />
      <br />

      <table border={2} cellPadding={2} cellSpacing={2}>
        <thead>
          <tr>
            <th>id</th>
            <th>firstName</th>
            <th>gender</th>
            <th>age</th>
            <th>role</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((el) => {
            return (
              <tr>
                <td>{el.id} </td>
                <td>{el.firstName}</td>
                <td>{el.gender}</td>
                <td>{el.age}</td>
                <td>{el.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
