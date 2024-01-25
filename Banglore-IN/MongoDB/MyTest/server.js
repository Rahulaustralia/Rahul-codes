const express = require("express");
const { collection } = require("./db.Connect");

// app creation
const app = express();

// PORT,hostName creation
const PORT = 2000;
const hostName = "127.0.0.2";

//middlewares
app.use(express.json());

app.get("/getstudent", async (req, res) => {
  let students = await collection;
  let data = await students.find().toArray();
  res.send(data);
});

app.post("/poststudent", async (req, res) => {
  let data = req.body;
  let student = await collection;
  let response = await student.insertOne(data);
  res.send(response);
});

app.delete("/deletestudent", async (req, res) => {
  let data = req.body;
  let student = await collection;
  let response = await student.dellestudent(data);
  res.send(response);
});

app.patch("/updatestudent", async (req, res) => {
  let data = req.body;
  let student = await collection;
  let response = await student.updateOne(data, {
    $set: { age: 40, address: "Delhi", sID: "1020AC" },
  });
  res.send(response);
});

app.listen(PORT, hostName, () => {
  console.log(`server started in http://${hostName}:${PORT}`);
});
