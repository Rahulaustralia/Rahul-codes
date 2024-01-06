// http

// serverListen()

const http = require("http");

const fs = require("fs");
const server = http.createServer((request, response) => {
  //   console.log(request.url);
  console.log(request.method);
  if (request.method == "GET") {
    if (request.url == "/") {
      response.write("HELLO FROM THE BACKEND SERVER");
      response.end();
    }
    if (request.url == "/about") {
      response.write("This is about page");
      response.end();
    }
    if (request.url == "/contact") {
      let data = fs.readFileSync("./msg.txt", "utf8");
      response.write(data);
      response.end();
    }
  }
});

server.listen(4000);
