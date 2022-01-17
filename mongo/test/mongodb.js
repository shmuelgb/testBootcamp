// ====CRUD=====>

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "my-database-test";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) return console.log("error");

    const db = client.db(databaseName);

    db.collection("users").insertOne({
      name: "sam",
      age: 27,
    });
  }
);
