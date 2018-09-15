'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const cocktails = [
  { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
  { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
  { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
  { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
  { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
  { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
  { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
  { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
];
const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

app.get('/', (req, res) => {

  if (req.query.alcohol) {
    let type = req.query.alcohol;
    let filteredCocktails = [];
    if (type === 'non-alcoholic') {
      filteredCocktails = cocktails.filter(alcohol => {
        return alcohol.isAlcoholic === false;
      });
    } else {
      filteredCocktails = cocktails.filter(alcohol => {
        return alcohol.contains.some(item => item === type);
      });
    }
      res.render('home', {
        list: filteredCocktails,
        alcohols: alcoholList,
      });
  } else {
    res.render('home', {
      list: cocktails,
      alcohols: alcoholList,
    });
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);  
});