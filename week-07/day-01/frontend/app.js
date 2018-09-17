'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let input = req.query.input;
  if (input) {
    res.json({
      received: input,
      result: input * 2,
    });
  } else {
    res.json({
      "error": "Please provide an input!"
    });
  };
});

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  if (name && title) {
    res.json({
      "welcome_message": `Oh, hi there ${name}, my dear ${title}!`,
    });
  } else if (name && !title){
    res.json({
      "error": "Please provide a title!",
    });
  } else if (!name && title){
    res.json({
      "error": "Please provide a name!",
    });
  } else {
    res.json({
      "error": "Please provide a name and a title!",
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  res.json({
    appended: req.params.appendable + "a",
  });
});

function sum(number) {
  if (number === 1) {
    return 1;
  } else {
    return number + sum(number - 1);
  }
};

function factor(number) {
  if (number === 1) {
    return 1;
  } else {
    return number * factor(number - 1);
  }
};

app.post('/dountil/:action', jsonParser, (req, res) => {
  let number = req.body.until;
  if (number === undefined) {
    res.json({
      "error": "Please provide a number!"
    });
  } else if (req.params.action === "sum") {
    res.json({
      result: sum(number),
    });
  } else if (req.params.action === "factor"){
    res.json({
      result: factor(number),
    });
  }; 
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);  
});