const express = require("express");
const app = express();
const PORT = 3000;
const employees = require("./employees");

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});

// Root path route
app.get("/", (req, res) => {
  res.send("You've reached the Employees object array.");
});

// `/employees` route to return the employees array as JSON
app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/random", (req, res) => {
  const random = Math.round(Math.random() * employees.length - 1) + 1;
  const randomFound = employees.find((employee) => employee.id === random);
  res.json(randomFound);

});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const found = employees.find((employee) => employee.id === Number(id));
  console.log(found);
  if (!found) {
    res.send("There was no employee found.");
  } else {
    res.json(found);
  }
});
