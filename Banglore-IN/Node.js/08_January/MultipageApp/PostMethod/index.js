const { log } = require("console");
const http = require("http");
const fs = require("fs");

const PORT = 7000;
const hostName = "127.0.0.8";

const server = http.createServer((req, res) => {
  const { method, url } = req;
  console.log(method, url);
  if (method == "GET") {
    if (url == "/") {
      let data = fs.readFileSync("./public/index.html", "utf8");
      res.writeHead(200, {
        "Content-Type": "text/html",
        message: "THIS IS THE HOME FILE",
      });
      res.write(data);
      res.end();
    }
    if (url == "/style") {
      let data = fs.readFileSync("./public/style.css", "utf8");
      res.write(data);
      res.end();
    }
  }
  if (method == "POST") {
    if (url == "/newUser") {
      req.on("data", (data) => {
        // console.log(data);
        let newUser = JSON.parse(data.toString());
        // console.log(newUser);
        let users = fs.readFileSync("./user.json", "utf8")
          ? JSON.parse(fs.readFileSync("./user.json", "utf8"))
          : [];
        users.push(newUser);
        fs.writeFileSync("./user.json", JSON.stringify(users));
        res.writeHead(201, {
          "Content-type": "application/json",
          message: "LOGIN RESPONSE",
        });
        res.write(JSON.stringify({ msg: "DATA RECIEVED" }));
        res.end();
      });
    }
  }
});

server.listen(PORT, hostName, () => {
  console.log(`Server strted at http://${hostName}:${PORT}`);
});
