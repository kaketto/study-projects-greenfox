'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mysql = require('mysql');
app.use(bodyParser.urlencoded({ extended: false}))
app.use('/assets', express.static('assets'));

const maxCapacity = 60;

const connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'pw1234',
  database: 'space_transporter',
  multipleStatements: true
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

app.get('/planets', (req, res) => {
  let sql = `select planet.id, name, population, utilization from planet left join spaceship on planet.name = spaceship.planet order by planet.id`
  connection.query(sql, function(err, result) {
    if (err) {
      res.status(500).send('Database error');
      return;
    }
    res.json(result);
  });
})

app.post('/movehere/:planet_id', jsonParser, (req, res) => {
  let planetID = req.params.planet_id;
  let planetName;
  let sqlSearch = `select name from planet where id = ?`
  let sqlUpdate = `update spaceship set ?;`;
  connection.query(sqlSearch, [planetID], function(err, result) {
    if (err) {
      res.status(500).json({"result": "error"}).send();
      return;
    }
    planetName = result[0].name;
    connection.query(sqlUpdate, {"planet": planetName}, function(err, result) {
      if (err) {
        res.status(500).json({"result": "error"}).send();
        return;
      }
      res.json({"result": "success"});
    });
  })
});

app.post('/toship/:planet_id', jsonParser, (req, res) => {
  let planetID = req.params.planet_id;
  let peopleOnShip;
  let peopleToFillShip;
  let population;
  let sqlSearch = `select utilization, population from spaceship, planet  where spaceship.id = 1 and planet.id = ?;`;
  let sqlUpdate = `update planet set population = population - ? where id = ?; update spaceship set utilization = utilization + ? where id = 1`;
  connection.query(sqlSearch, [planetID], function(err, result) {
    if (err) {
      res.status(500).json({"result": "error"}).send();
      return;
    }
    peopleOnShip = result[0].utilization;
    population = result[0].population;
    if (population >= maxCapacity - peopleOnShip) {
      peopleToFillShip = maxCapacity - peopleOnShip;
    } else {
      peopleToFillShip = population;
    }
    connection.query(sqlUpdate, [peopleToFillShip, planetID, peopleToFillShip], function(err, result) {
      if (err) {
        res.status(500).json({"result": "error"}).send();
        return;
      }
      res.json({"result": "success"});
    });
  });
});

app.post('/toplanet/:planet_id', jsonParser, (req, res) => {
  let planetID = req.params.planet_id;
  let peopleOnShip;
  let sqlSearch = `select utilization from spaceship where id = 1;`;
  let sqlUpdate = `update planet set population = population + ? where id = ?; update spaceship set utilization = 0 where id = 1`;
  connection.query(sqlSearch, function(err, result) {
    if (err) {
      res.status(500).json({"result": "error"}).send();
      return;
    }
    peopleOnShip = result[0].utilization;
    connection.query(sqlUpdate, [peopleOnShip, planetID], function(err, result) {
      if (err) {
        res.status(500).json({"result": "error"}).send();
        return;
      }
      res.json({"result": "success"});
    });
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);  
});
