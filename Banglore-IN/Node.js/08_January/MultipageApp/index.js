const { log } = require("console");
const http = require("http");

const PORT = 2000;
const hostName = "127.0.0.4";

const server = http.createServer((req, res) => {
  let { url, method } = req;
  if (method === "GET") {
    if (url == "/") {
      res.write("<h1>This is Home Page</h1>");
      res.end();
    } else if (url == "/navbar") {
      res.write("<h1>About Page</h1>");
      res.end();
    } else if (url == "/about") {
      res.write("<h1><marquee>  Blog Page </marquee> </h1>");
      res.end();
    } else if (url == "/contact") {
      res.write("<h1><marquee>  Blog Page </marquee> </h1>");
      res.end();
    }
  } else {
    res.write("<h1>Error 404 Page Not Found </h1>");
    res.end();
  }
});

server.listen(PORT, hostName, () => {
  console.log(`server listening at http://${hostName}:${PORT}`);
});
