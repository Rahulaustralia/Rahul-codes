// const { log } = require("console");
const http = require("http");
const fs = require("fs");
const { log } = require("console");

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
      let data = fs.readFileSync("./public/html/about.html", "utf8");
      res.write(data);
      res.end();
    }
    if (url == "/contact") {
      let data = fs.readFileSync("./public/html/contact.html", "utf8");
      res.write(data);
      res.end();
    }
    if (url == "/signup") {
      let data = fs.readFileSync("./public/html/signup.html", "utf8");
      res.write(data);
      res.end();
    }
    if (url == "/signupcss") {
      let data = fs.readFileSync("./public/css/signup.css", "utf8");
      res.write(data);
      res.end();
    }
  }
  if (method == "POST") {
    if (url == "/newusers") {
      req.on("data", (data) => {
        console.log(data.toString());
        let newUser = JSON.parse(data.toString());
        let users = fs.readFileSync("./users.json", "utf-8")
          ? JSON.parse(fs.readFileSync("./users.json", "utf-8"))
          : [];
        users.push(newUser);
        console.log(newUser);
        fs.writeFileSync("./users.json", JSON.stringify(users));
        res.write(JSON.stringify({ msg: "Data Stored in Database" }));
        res.end();
      });
    }
  }
});

server.listen(PORT, hostName, () => {
  console.log(`server listening at http://${hostName}:${PORT}`);
});
