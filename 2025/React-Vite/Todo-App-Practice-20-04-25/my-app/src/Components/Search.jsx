import React, { useEffect, useState } from "react";

const Search = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [sort, setSort] = useState([]);

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

  console.log(data);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const filterData = data.filter((el) => {
      return el.firstName.toLowerCase().includes(text.toLowerCase());
    });

    const myInterval = setInterval(() => {
      setSort(filterData);
    }, 2000);
    return () => {
      clearTimeout(myInterval);
    };
  }, [text]);

  return (
    <div>
      <h1> Searching.... </h1>
      <input
        type="text"
        placeholder="Search Name"
        onChange={handleChange}
        value={text}
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

export default Search;
