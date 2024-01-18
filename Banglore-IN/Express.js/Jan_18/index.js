const { log } = require("console");
const express = require("express");
const path = require("path");

const PORT = 4000;
const hostName = "127.0.0.4";

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/newuser", (req, res) => {
  console.log(req.body);
  res.status(201).send({ msg: "data received" });
});

app.listen(PORT, hostName, () => {
  console.log(`server started at http://${hostName}:${PORT}`);
});
