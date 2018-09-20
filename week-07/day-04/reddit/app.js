'use strict';
const express = require('express');
const app = express();
const path = require('path');
const PORT = 8888;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mysql = require('mysql');

app.use('/assets', express.static('assets'));

// const connection = mysql.createConnection ({
//   host: 'localhost',
//   user: 'root',
//   password: 'pw1234',
//   database: 'reddit',
// });
// connection.connect(function(err) {
//   if (err) {
//     console.log('Error connecting to Db');
//     return;
//   }
//   console.log('Connection established');
// });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/hello', (req, res) => {
  res.send("Hello world");
});


app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);  
});
