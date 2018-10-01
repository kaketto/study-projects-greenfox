'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');

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

module.exports = app;