import express, { json } from "express";

const app = express();

app.use(json());

app.get("/", (_req, res) => {
  res.send("Welcome to the API!");
});

app.get("/api/health", (_req, res) => {
  const healthCheck = {
    status: "OK",
    timestamp: new Date(),
  };

  res.json(healthCheck);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
