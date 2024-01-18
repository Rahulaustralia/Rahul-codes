// importing express
const express = require("express");
// app creation
const app = express();

const fs = require("fs");
const path = require("path");

// PORT, hostName
const PORT = 2000;
const hostName = "127.0.0.8";

// middleware
app.use(express.static(path.join(__dirname, "public")));

// API's
// get
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "index.html"));
});

app.get("/about", (req, res) => {
  res.send("This is About Page");
});

// app listening
app.listen(PORT, hostName, () => {
  console.log(`server started at http://${hostName}:${PORT}`);
});
