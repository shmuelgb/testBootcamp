// Create a get, post, delete, put route in Express. The base route
// url will be called “numbers”.
// In each response send back a string “success using (method
// name)”.
// Test your work with postman.
const express = require("express");
const app = express();

app.use(express.json());

app.get("/numbers", (req, res) => {
  const msg = "success using GET";
  console.log(msg);
  res.send(msg);
});

app.post("/numbers/:id", (req, res) => {
  const msg = "success using POST";
  console.log(msg, req.body);
  res.send(`${msg} ${JSON.stringify(req.body)}`);
});

app.put("/numbers/:id", (req, res) => {
  const msg = "success using PUT";
  console.log(msg, req.body);
  res.send(`${msg} ${JSON.stringify(req.body)}`);
});

app.delete("/numbers/:id", (req, res) => {
  const msg = "success using DELETE";
  console.log(msg);
  res.send(msg);
});

app.listen(3000, () => {
  console.log("Listening");
});
