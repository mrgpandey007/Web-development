const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // serve index.html

// DB connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass",   // change to your MySQL password
  database: "student_db"
});

// Route: Add student via stored procedure
app.post("/add", (req, res) => {
  const { name, email } = req.body;
  db.query("CALL addStudent(?, ?)", [name, email], (err) => {
    if (err) return res.send("Error: " + err.message);
    res.send("Student Added!");
  });
});

// Route: Get students via stored procedure
app.get("/students", (req, res) => {
  db.query("CALL getStudents()", (err, results) => {
    if (err) return res.send("Error: " + err.message);
    res.json(results[0]);
  });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));