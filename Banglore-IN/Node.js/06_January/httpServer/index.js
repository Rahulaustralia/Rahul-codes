const { log } = require("console");
const http = require("http");
const PORT = 8000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  let { url, method } = req;
  if (method === "GET") {
    if (url == "/") {
      res.write("<h1>This is Home Page</h1>");
      res.end();
    } else if (url == "/about") {
      res.write("<h1>About Page</h1>");
      res.end();
    } else if (url == "/blog") {
      res.write("<h1><marquee>  Blog Page </marquee> </h1>");
      res.end();
    }
  } else {
    res.write("<h1>Error 404 Page Not Found </h1>");
    res.end();
  }
});
// console.log("server started....");
// server.listen(8000);

server.listen(PORT, hostName, () => {
  console.log(`server started at http://${hostName}:${PORT}`);
  console.log("server started at" + "http://" + hostName + ":" + PORT);
});
