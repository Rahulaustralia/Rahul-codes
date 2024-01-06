// http

// serverListen()

const http = require("http");

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
  }
});

server.listen(4000);
