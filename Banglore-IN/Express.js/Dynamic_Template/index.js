const express = require("express");
const { join } = require("path");

const PORT = 9000;
const hostName = "127.0.0.9";

const app = express();

app.set("view engine", "ejs");
app.use(express.static(join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("Home", { name: "Ram", add: "Ayodhya" });
});

app.get("/about", (req, res) => {
  res.render("About", { data: ["apple", "mango", "grapes"] });
});

app.listen(PORT, hostName, () => {
  console.log(`server running in http://${hostName}:${PORT}`);
});

// const express = require("express");

// const app = express();

// const PORT = 7000;

// const hostName = "127.0.0.7";

// app.use(express.json()); // json middleware

// app.get("/get", (req, res) => {
//   res.status(203).send({ name: "Rahul", age: 26 });
// });

// app.post("/post", (req, res) => {
//   console.log(req.body);
//   res.status(201).send("Data Received");
// });

// app.listen(PORT, hostName, () => {
//   console.log(`server running in http://${hostName}:${PORT}`);
// });
