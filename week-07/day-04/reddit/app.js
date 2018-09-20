'use strict';
const express = require('express');
const app = express();
const path = require('path');
const PORT = 8888;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mysql = require('mysql');

app.use('/assets', express.static('assets'));

const connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'pw1234',
  database: 'reddit',
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

app.get('/hello', (req, res) => {
  res.send("Hello world");
});

app.get('/posts', (req, res) => {
  connection.query(`SELECT * FROM posts`, function(err, result) {
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

app.post('/posts', jsonParser, (req, res) => {
  let title = req.body.title;
  let url = req.body.url;
  connection.query(`INSERT INTO posts SET ?`, {"title": title, "url": url}, function(err, result_id) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    connection.query(`SELECT * FROM posts WHERE id = "${result_id.insertId}"`, function(err, result_newPost) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      res.json(
        result_newPost[0]
    );
    });
  });
});

app.put('/posts/:id/upvote', jsonParser, (req, res) => {
  let id = req.params.id;
  connection.query(`UPDATE posts SET score=score+1 WHERE id = ${id}`, function(err, result) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    connection.query(`SELECT * FROM posts WHERE id = "${id}"`, function(err, result_upvotedPost) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      res.json(
        result_upvotedPost[0]
      );
    });
  });
});

app.put('/posts/:id/downvote', jsonParser, (req, res) => {
  let id = req.params.id;
  connection.query(`UPDATE posts SET score=score-1 WHERE id = ${id}`, function(err, result) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    connection.query(`SELECT * FROM posts WHERE id = "${id}"`, function(err, result_downvotedPost) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      res.json(
        result_downvotedPost[0]
      );
    });
  });
});

app.delete('/posts/:id', jsonParser, (req, res) => {
  let id = req.params.id;
  connection.query(`DELETE FROM posts WHERE id = ${id}`, function(err, result) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.status(204).send();
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);  
});
