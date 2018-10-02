'use strict';
const express = require('express');
const app = express();
const path = require('path');
const PORT = 8888;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: false}))
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

app.get('/newpost', (req, res) => {
  res.sendFile(path.join(__dirname, 'new_post.html'));
});

app.get('/updatepost', (req, res) => {
  res.sendFile(path.join(__dirname, 'modify_post.html'));
});

app.get('/posts', (req, res) => {
  connection.query(`SELECT * FROM posts ORDER BY published desc`, function(err, result) {
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
  connection.query(`INSERT INTO posts SET ?`, {"title": title, "url": url}, function(err, result) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.redirect('/');
  });
});

app.put('/posts/:id/upvote', jsonParser, (req, res) => {
  let id = req.params.id;
  connection.query(`UPDATE posts SET score=score+1 WHERE id = ?`, [id], function(err, result) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    connection.query(`SELECT * FROM posts WHERE id = ?`, [id], function(err, result_upvotedPost) {
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
  connection.query(`UPDATE posts SET score=score-1 WHERE id = ?`, [id], function(err, result) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    connection.query(`SELECT * FROM posts WHERE id = ?`, [id], function(err, result_downvotedPost) {
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

app.post('/posts/:id', (req, res) => {
  let id = req.params.id;
  connection.query(`DELETE FROM posts WHERE id = ?`, [id], function(err, result) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.redirect('/');
  });
});

app.put('/posts/:id', jsonParser, (req, res) => {
  let id = req.params.id;
  let title = req.body.title;
  let url = req.body.url;
  connection.query(`UPDATE posts SET title = ?, url = ? WHERE id = ?`, [title, url, id], function(err, result) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    connection.query(`SELECT * FROM posts WHERE id = ?`, [id], function(err, result_modifiedPost) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      res.json(
        result_modifiedPost[0]
      );
    });
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);  
});
