const express = require("express");
const {
  getAllEnvironment,
  getEnvironmentById,
  createEnvironment,
  updateEnvironment,
  deleteEnvironment,
} = require("./service.js");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  const data = getAllEnvironment();
  res.status(200).send(data);
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const data = getEnvironmentById(id);
  res.status(200).send(data);
});

app.post("/", (req, res) => {
  const { label, category, priority } = req.body;
  const data = createEnvironment(label, category, priority);
  res.status(201).send(data);
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { label, category, priority } = req.body;
  const data = updateEnvironment(id, label, category, priority);
  res.status(200).send(data);
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  const data = deleteEnvironment(id);
  res.status(200).send(data);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
