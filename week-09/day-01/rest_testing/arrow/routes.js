'use strict';

const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  if (req.query.distance) {
    res.status(200).json({
      distance: req.query.distance,
      time: req.query.time,
      speed: req.query.distance / req.query.time
    }).send();
  } else {
    res.status(400).json({ error: "no data provided"}).send();
  }  
});

module.exports = app;