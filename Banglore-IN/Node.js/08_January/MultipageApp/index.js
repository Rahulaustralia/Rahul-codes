// const { log } = require("console");
const http = require("http");
const fs = require("fs");

const PORT = 2000;
const hostName = "127.0.0.4";

const server = http.createServer((req, res) => {
  const { method, url } = req;
  console.log(method, url);
  if (method == "GET") {
    if (url == "/") {
      let data = fs.readFileSync("./public/html/index.html", "utf8");
      res.write(data);
      res.end();
    }
    if (url == "/style") {
      let data = fs.readFileSync("./public/css/index.css", "utf8");
      res.write(data);
      res.end();
    }
    if (url == "/ramimage") {
      let data = fs.readFileSync("./public/images/ram.jpg");
      res.write(data);
      res.end();
    }
    if (url == "/about") {
      let data = fs.readFileSync("./public/html/about.html");
      res.write(data);
      res.end();
    }
    if (url == "/contact") {
      let data = fs.readFileSync("./public/html/contact.html");
      res.write(data);
      res.end();
    }
  }
});

server.listen(PORT, hostName, () => {
  console.log(`server listening at http://${hostName}:${PORT}`);
});
