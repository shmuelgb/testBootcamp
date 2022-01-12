// Little Express Crud
// Using the routes you created in the last exercise complete the
// following:
// Create an array of numbers for example [1,2,3,4,5,6] that will be set
// in your global scope.
// GET
// ● With your get route, return the array of numbers to the client
// POST
// ● With your post route, create a new number that you are
// getting from the body and append it to your array of numbers,
// send the array back to the client
// DELETE
// ● With your delete route, get the number you want to remove
// from your params, remove the number from your array of
// numbers, send the array back to the client
// PUT
// ● With your put route, get the number you want to remove from
// your params, get the new number you want to be replaced
// from your body, modify the number from your array of
// numbers, send the array back to the client.
// Error handling <3
// If the user tries to post a number that already exists in your array
// send a status 400 to the user saying the number already exists
// If the user tries to delete a number that doesn’t exist in your array,
// send a status 400 to the user saying the number doesn’t exist
// If the user tries to update a number that doesn’t exist, send a status
// 400 to the user saying the number doesn’t exist
// Tips:
// Do not make any copies of the array of numbers. Mutate the array
// directly.

const express = require("express");
const { number } = require("yargs");
const app = express();
app.use(express.json());

let numbers = [1, 2, 3, 4, 5, 6];

app.get("/numbers", (req, res) => {
  res.send(numbers);
});

app.post("/numbers", (req, res) => {
  const num = parseInt(req.body.post);
  if (numbers.some((n) => n === num)) {
    res.status(400).send(" number already exists");
  } else {
    numbers.push(num);
    res.send(numbers);
  }
});

app.put("/numbers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const num = parseInt(req.body.put);
  const place = numbers.findIndex((n) => n === id);
  if (place === -1) res.status(400).send(" number dont exists");
  else {
    numbers[place] = num;
    console.log("numbers", numbers);
    res.send(numbers);
  }
});

app.delete("/numbers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const place = numbers.findIndex((n) => n === id);
  if (place === -1) res.status(400).send(" number dont exists");
  else {
    numbers = numbers.filter((n) => n !== id);
    res.send(numbers);
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
