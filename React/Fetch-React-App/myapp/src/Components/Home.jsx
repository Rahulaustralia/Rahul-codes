import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((myData) => setData(myData))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <h1> Fetch API DATA </h1>

      {data.map((el) => {
        return (
          <div key={el.id}>
            <h1> ID: {el.id} </h1>
            <p> Name: {el.name} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
