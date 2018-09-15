'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home page',
    header: 'Green Fox Academy',
  });
});

app.get('/products/:id', (req, res) => {
  // console.log(req.query.fox); 
  //if request is: localhost:3000/products/4/?fox=green -> returns 'green'
  //if request is: localhost:3000/products/4/?foxxxx=green -> returns 'undefined'
  res.render('home', {
    title: 'Product page',
    header: req.params.id,
    withGoodbye: req.query.withgoodbye === 'true',
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);  
});