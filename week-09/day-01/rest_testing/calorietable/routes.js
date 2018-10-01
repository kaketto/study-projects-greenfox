'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'pw1234',
  database: 'drax',
  multipleStatements: true
});

connection.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

app.get('/drax', (req, res) => {
  connection.query(`select * from calories`, (err, result) => {
    if (err) {
      res.status(500).send('Database error');
      return;
    }
    res.status(200).json(result).send();
  })
});

app.post('/drax/newitem', jsonParser, (req, res) => {
  let name = req.body.name;
  let amount_grams = req.body.amount_grams;
  let calories = req.body.calories;
  connection.query(`insert into calories set ?`, {"name": name, "amount_grams": amount_grams, "calories": calories}, (err, result) => {
    if (err) {
      res.status(500).send('Database error');
      return;
    }
    res.redirect('/drax');
  })
})

app.delete('/drax/:name', (req, res) => {
  let name = req.params.name;
  connection.query(`DELETE FROM calories WHERE name = ?`, [name], function(err, result) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.status(204).send();
  });
});

app.put('/drax/:name', jsonParser, (req, res) => {
  let name = req.params.name;
  let newAmount = req.body.amount_grams;
  let newCalories = req.body.calories;

  connection.query(`UPDATE calories SET amount_grams = ?, calories = ? WHERE name = ?`, [newAmount, newCalories, name], function(err, result) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    connection.query(`SELECT * FROM calories WHERE name = ?`, [name], function(err, result_modifiedPost) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      res.json(
        result_modifiedPost[0]
      );
    });
  });
});


module.exports = { app, mysql};