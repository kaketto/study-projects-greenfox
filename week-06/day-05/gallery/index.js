'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

const album = [
  {title: 'red panda', description: 'blablabla', img: 'https://o.aolcdn.com/images/dims3/GLOB/crop/3600x1800+0+150/resize/630x315!/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F1d4ee47dbccace0949ddcb2f75618b42%2F203326867%2F493156892.jpg'},
  {title: 'panda bear', description: 'valami valami', img: 'https://timedotcom.files.wordpress.com/2017/03/panda-black-white-study.jpg?quality=85&w=1012&h=569&crop=1'},
  {title: 'cats', description: 'animals', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnplE8ZzUJo1I1t_ZZ9rD_hKQJlIhAfRo1l7tqDdWnZU4V_x_0'},
];

app.get('/', (req, res) => {
    res.render('home', {
      photos: album, 
    });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);  
});