const fs = require("fs");

const path = "./storage/environment.json";

function getAllEnvironment() {
  const data = JSON.parse(fs.readFileSync(path));
  return data;
}

function getEnvironmentById(id) {
  const data = JSON.parse(fs.readFileSync(path));

  const filtered = data.filter((el) => el.id == id);
  return filtered;
}

function createEnvironment(label, category, priority) {
  const data = JSON.parse(fs.readFileSync(path));

  const item = {
    id: label.toLowerCase(),
    label: label,
    category: category,
    priority: priority,
  };

  data.push(item);

  fs.writeFileSync(path, JSON.stringify(data));
  return data;
}

function updateEnvironment(id, label, category, priority) {
  const data = JSON.parse(fs.readFileSync(path));

  const filtered = data.filter((el) => el.id != id);
  if (filtered.length == data.length) return "id not found";

  const item = {
    id: label.toLowerCase(),
    label: label,
    category: category,
    priority: priority,
  };

  filtered.push(item);

  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
}

function deleteEnvironment(id) {
  const data = JSON.parse(fs.readFileSync(path));

  const filtered = data.filter((el) => el.id != id);
  if (filtered.length == data.length) return "id not found";
  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
}

module.exports = {
  getAllEnvironment,
  getEnvironmentById,
  createEnvironment,
  updateEnvironment,
  deleteEnvironment,
};
