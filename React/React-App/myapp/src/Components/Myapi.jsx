// import React, { useEffect, useState } from "react";

// const Myapi = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://genius-song-lyrics1.p.rapidapi.com/search/")
//       .then((res) => res.json())
//       .then((myData) => {
//         setData(myData);
//       });
//   }, []);

//   console.log(data);
//   return (
//     <>
//       <h1> Music Api </h1>
//     </>
//   );
// };

// export default Myapi;

import React, { useState } from "react";

const Myapi = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = "YOUR_API_KEY";

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://genius-song-lyrics1.p.rapidapi.com/search?q=${searchQuery}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": "genius-song-lyrics1.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSearchResults(data.response.hits);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a song"
      />
      <button onClick={handleSearch} disabled={isLoading}>
        {isLoading ? "Searching..." : "Search"}
      </button>

      {error && <div>Error: {error.message}</div>}

      <ul>
        {searchResults.map((result) => (
          <li key={result.result.id}>
            <a
              href={result.result.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {result.result.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Myapi;
