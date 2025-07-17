import React, { useEffect, useState } from "react";

const Test1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) {
          throw new Error("Network response is not ok");
        }
        const myData = await response.json();
        setData(myData.users);
      } catch {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, []);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>useMemo & useCallback </h1>
    </div>
  );
};

export default Test1;
