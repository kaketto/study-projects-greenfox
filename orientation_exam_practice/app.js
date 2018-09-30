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
app.use(bodyParser.urlencoded({ extended: false }));

const connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'pw1234',
  database: 'matrices',
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

app.post('/matrix/', jsonParser, (req, res) => {
  if (req.body.matrix_input === '') {
    res.json(" Empty field, please enter a matrix!");
  } else {
    let result;
    let errorNotNumbers = 'Please enter numbers!';
    let errorNotSquare = 'This is not a square matrix, please try again!'
    let resultOK = 'Well done, this is an increasing matrix! It has been added to the database.';
    let resultFail = 'This matrix is not increasing! Please try again!';
    
    let userInput = req.body.matrix_input;

    function areNumbers (input) {
      let letters = input.match(/[a-zA-Z]/gi);
      if (letters === null) {
        return true;
      } else {
      return false;
      }
    };
    
    function createMatrix (input) {
      let userInputArray = input.split('\n');
      while (userInputArray[userInputArray.length - 1] === '') {
        userInputArray.splice(userInputArray.length - 1);
      }
      let matrix = [];
      userInputArray.forEach(element => {
        matrix.push(element.replace(/[' ']/gi, '').split(''));
      });
      return matrix;
    }
    let matrix = createMatrix(userInput);
    
    function isSquare (matrix) {
      return matrix.every(elem => elem.length === matrix.length);
    };
    
    function isIncreasing (matrix) {
      for (let i = 1; i < matrix.length; i++) {
        matrix.forEach(elem => {
          if (elem[i - 1] > elem[i]) {
            return false;
          };
        });
        for (let rows = 1; rows < matrix.length; rows++) {
          if (matrix[rows - 1][i - 1] > matrix[rows][i - 1]) {
            return false;
          }
        }
      };
      return true;
    };

    if (!areNumbers(userInput)) {
      result = errorNotNumbers;
    } else if (!isSquare(matrix)){
      result = errorNotSquare;
    } else if (isIncreasing(matrix)) {
      result = resultOK;
      connection.query(`INSERT INTO matrices SET ?`, {"matrixNumbers": matrix});
    } else {
      result = resultFail;
    }
    res.json(result);
  }
});

app.get('/matrices', (req, res) => {
  connection.query(`SELECT * FROM matrices`, function(err, result) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json({
      posts: result,
    });
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);  
});