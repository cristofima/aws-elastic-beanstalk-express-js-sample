const express = require("express");
const app = express();
const port = 8080;

app.get("/", (_req, res) => res.send("Welcome to the API!"));
app.get("/api/health", (_req, res) => {
  const healthCheck = {
    status: "OK",
    timestamp: new Date(),
  };

  res.json(healthCheck);
});

app.get("/api/testing", (_req, res) => {
  const dummyData = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer",
  };

  res.json(dummyData);
});

app.listen(port);
console.log(`App running on http://localhost:${port}`);
