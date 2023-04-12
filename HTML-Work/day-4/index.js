async function makeRequest() {
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let mydata = await res.json();

  console.log(mydata.data);
}

makeRequest();
