import React, { useEffect, useState } from "react";

const Fatch = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [update, setUpdate] = useState([]);
  const [toggle, setToggle] = useState(false);

  const fetchData = () => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((myData) => {
        setData(myData.users);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
    let timer = setTimeout(() => {
      const filterData = data?.filter((item) => {
        return item.firstName.toLowerCase().includes(text.toLocaleLowerCase());
      });
      setUpdate(filterData);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  function throtte() {
    setToggle(true);

    const timer = setTimeout(() => {
      setToggle(false);
    }, 2000);
    return () => clearTimeout(timer);
  }

  const handleChange = (e) => {
    setText(e.target.value);
  };
  console.log(toggle);
  return (
    <div>
      <h1> Fetch API Data and search by input </h1>
      <div>
        <br />
        <input
          type="text"
          onChange={handleChange}
          value={text}
          placeholder="Serch by firstName"
        />
        <button onClick={throtte} disabled={toggle}>
          Toggle Gender
        </button>

        <table border={3} cellPadding={5} cellSpacing={5}>
          <thead>
            <tr>
              <th>id</th>
              <th>firstName</th>
              <th>gender</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            {(update.length > 0 ? update : data).map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.gender}</td>
                  <td>{item.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fatch;
