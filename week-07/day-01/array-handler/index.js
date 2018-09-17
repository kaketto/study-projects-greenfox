'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function multiply(array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
}

function double(array) {
  let doubles = array.map(item => item * 2)
  return doubles;
}

app.post('/arrays', jsonParser, (req, res) => {
  let what = req.body.what;
  let numbers = req.body.numbers;
  if (what === undefined && numbers !== undefined) {
    res.json({
      "error": "Please provide what to do with the numbers!"
    })
  } else if (numbers === undefined) {
    res.json({
      "error": "Please provide numbers!"
    })
  } else if (what === "sum") {
    res.json({
      result: sum(numbers),
    })
  } else if (what === "multiply") {
      res.json({
        result: multiply(numbers),
      })
  } else if (what === "double") {
    res.json({
      result: double(numbers),
    })
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);  
});
