'use strict';
const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const fetch = require('node-fetch');
const mysql = require('mysql');

app.use('/assets', express.static('assets'));

const connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'pw1234',
  database: 'bookstore',
});
connection.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/v1/books', function(req, res) {
  connection.query('SELECT book_name FROM book_mast;', function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json({
      books: rows
    });
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);  
});
