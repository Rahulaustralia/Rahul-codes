import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Fetch = () => {
  let dispatch = useDispatch();

  let [text, setText] = useState("");
  let [filterData, setFilterData] = useState([]);

  const APIData = useSelector((el) => {
    return el.FetchReducer;
  });

  console.log(APIData);

  console.log(text);

  useEffect(() => {
    dispatch({ type: "loading", payload: true });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((myData) => {
        console.log(myData), dispatch({ type: "DataFetch", payload: myData });
      })
      .catch((err) => {
        console.log(err), dispatch({ type: "err", payload: err });
      });
  }, []);

  let handleChange = (e) => {
    setText(e.target.value);

    let filter = APIData.data?.filter((item) => {
      return item.name.trim().toLowerCase().includes(text.toLowerCase());
    });

    let timmer = setTimeout(() => {
      setFilterData(filter);
    }, 5000);

    return () => {
      clearTimeout(timmer);
    };

    // console.log("Filter Data", filter);
  };

  return (
    <div>
      <h1> My API Data </h1>
      <input type="text" placeholder="Enter a word" onChange={handleChange} />

      {(filterData.length > 0 ? filterData : APIData.data)?.map((item, i) => {
        return (
          <div key={i}>
            <h1>Name: {item.name} </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Fetch;
