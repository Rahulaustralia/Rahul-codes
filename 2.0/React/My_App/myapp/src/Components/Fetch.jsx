import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((myDaya) => setData(myDaya))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <h1> Fetch API Data </h1>
      <div>
        {data.map((el) => {
          return (
            <div key={el.id}>
              <h1> Password:- {el.password} </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fetch;
