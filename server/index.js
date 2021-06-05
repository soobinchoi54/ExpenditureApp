const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// create db connection
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "ExpenditureSystem",
});

// create post request
app.post("/create", (req, res) => {
  // grab variables
  const date = req.body.date;
  const description = req.body.description;
  const category = req.body.category;
  const subcategory = req.body.subcategory;
  const amount = req.body.amount;

  // send variables to db
  db.query(
    "INSERT INTO Expenditure (date, description, category, subcategory, amount) VALUES (?,?,?,?,?)",
    [date, description, category, subcategory, amount],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Success: Values inserted");
      }
    } // instead of inserting values directly, use an array and assign to each question mark
  );
});

app.delete("/delete/:id", (req, res) => { // passing id through parameter as :id
  const id = req.params.id;
  db.query("DELETE FROM Expenditure WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const amount = req.body.amount;
  db.query(
    "UPDATE Expenditure SET amount = ? WHERE id = ?",
    [amount, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/transactions", (req, res) => {
  db.query("SELECT * FROM Expenditure", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
