let movies_div = document.getElementById("movies");

async function main() {
  try {
    let query = document.getElementById("query").value;

    //   console.log(query);

    let res = await fetch(`http://www.omdbapi.com/?apikey=7cc2c43f&s=${query}`);

    let data = await res.json();

    let actualData = data.Search;

    console.log(actualData);
    if (actualData != undefined) {
      appendMovies(actualData);
    }
  } catch (err) {
    console.log(err);
  }
}

function appendMovies(data) {
  movies_div.innerHTML = null;
  data.forEach(function (item) {
    let div = document.createElement("div");
    div.setAttribute("id", "myDiv");
    let img = document.createElement("img");
    img.src = item.Poster;
    let h2 = document.createElement("h2");
    h2.innerText = item.Title;
    let h3 = document.createElement("h3");
    h3.innerText = item.Type;
    let h4 = document.createElement("h4");
    h4.innerText = item.Year;

    div.append(img, h2, h3, h4);
    movies_div.append(div);
  });
}
