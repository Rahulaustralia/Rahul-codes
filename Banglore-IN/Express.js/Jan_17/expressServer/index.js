// importing express
const express = require("express");
// app creation
const app = express();

// PORT, hostName
const PORT = 2000;
const hostName = "127.0.0.8";

// API's
// get

app.get("/", (req, res) => {
  res.send("<h1> HELLO IN THE EXPRESS SERVER </h1>");
});

app.get("/about", (req, res) => {
  res.send("This is About Page");
});

// if (url == "/style") {
//   let data = fs.readFileSync("./public/css/index.css", "utf8");
//   res.write(data);
//   res.end();
// }
// if (url == "/ramimage") {
//   let data = fs.readFileSync("./public/images/ram.jpg");
//   res.write(data);
//   res.end();
// }

// app listening
app.listen(PORT, hostName, () => {
  console.log(`server started at http://${hostName}:${PORT}`);
});
