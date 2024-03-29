const express = require("express");

const app = express();

const PORT = 7000;

const hostName = "127.0.0.7";

app.use(express.json()); // json middleware

app.get("/get", (req, res) => {
  res.status(203).send({ name: "Rahul", age: 26 });
});

app.post("/post", (req, res) => {
  console.log(req.body);
  res.status(201).send("Data Received");
});

app.listen(PORT, hostName, () => {
  console.log(`server running in http://${hostName}:${PORT}`);
});
