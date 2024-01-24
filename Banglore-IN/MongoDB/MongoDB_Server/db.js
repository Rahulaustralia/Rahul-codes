const mongodb = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new mongodb.MongoClient(url);

const dbName = "A1mongoDB";

const insertData = async () => {
  const result = await client.connect();
  const db = result.db(dbName);
  const collection = db.collection("students");
  //   collection.insertOne({ name: "Rahul", age: 26 });
  collection.insertMany([
    { name: "Rahul", age: 26 },
    { name: "Animesh", age: 22 },
  ]);

  let data = await collection.find().toArray();
  console.log(data);
};

module.exports = { insertData };
