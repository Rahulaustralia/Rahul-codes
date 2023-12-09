let movies_div = document.getElementById("movies");

async function main() {
  try {
    let query = document.getElementById("query").value;

    //   console.log(query);

    let res = await fetch(`http://www.omdbapi.com/?apikey=7cc2c43f&s=${query}`);

    let data = await res.json();

    let actualData = data.Search;

    appendMovies(actualData);
    console.log(globalArr);
  } catch (err) {
    console.log(err);
  }
}

function appendMovies(data) {
  data.forEach(function (item) {
    let p = document.createElement("p");
    p.innerText = item.Title;

    movies_div.append(p);
  });
}
