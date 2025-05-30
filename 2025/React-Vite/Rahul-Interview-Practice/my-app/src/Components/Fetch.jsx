import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((myData) => {
        setData(myData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <h1> Fetch Data </h1>
    </div>
  );
};

export default Fetch;
