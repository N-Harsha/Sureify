const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Initialize the JSON object with some default values
let data = [
  {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  },
];

// Respond to GET requests with the current state of the data object
app.get("/", (req, res) => {
  res.json(data);
});

// Append new data to the JSON object and respond with the updated state
app.post("/", (req, res) => {
  const newData = req.body;
  data.push(newData);

  res.json(data);
});

// Start the server on port 3001
app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
