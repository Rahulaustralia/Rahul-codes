import React, { useState } from "react";

const Home = () => {
  const [data, setData] = useState(false);
  return (
    <div>
      <h1> Home </h1>
      {data == true && <h3> Rahul </h3>}
      {!(data == true) && <h3> Pandey </h3>}
      {data == true ? <h1> True </h1> : <h2> False </h2>}
    </div>
  );
};

export default Home;
