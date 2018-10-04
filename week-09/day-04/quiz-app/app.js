'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mysql = require('mysql');

app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false}))

const connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'pw1234',
  database: 'quiz_app',
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

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.get('/game', (req, res) => {
  let sqlCheckQuestionIDs = `select id from questions`;
  let sqlGetQuestionAndAnswers = `select questions.id as question_id, question, answers.id, answer, is_correct from questions right join answers on questions.id = answers.question_id where questions.id = ?;`;
  let questionIDs = [];
  let randomQuestionID;
  connection.query(sqlCheckQuestionIDs, function(err, result) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    result.forEach((element) => {
      questionIDs.push(element.id);
    });
    randomQuestionID = questionIDs[Math.floor(Math.random() * questionIDs.length)];
    connection.query(sqlGetQuestionAndAnswers, [randomQuestionID], function(err, result) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      res.json({
        "id": randomQuestionID,
        "question": result[0].question,
        "answers": result
      });
    });
  });
})

app.get('/questions', (req, res) => {
  let sqlGetQuestions = `select * from questions`;
  connection.query(sqlGetQuestions, function(err, result) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json(result);
  });
});

app.post('/questions', jsonParser, (req, res) => {
  let question = req.body.newQuestion;
  let answers = req.body.answer;
  let correctAnswer = req.body.is_correct;
  let is_correct_values = [0, 0, 0, 0];
  is_correct_values[Number(correctAnswer) - 1] = 1;
  let sqlInsertQuestion = `insert questions set ?`;
  let sqlInsertAnswer = `insert into answers(question_id, answer, is_correct) values (?,?,?)`;
  connection.query(sqlInsertQuestion, {"question": question}, function(err, result) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    let questionID = result.insertId;
    answers.forEach((element, index) => {
      connection.query(sqlInsertAnswer, [questionID, element, is_correct_values[index]], function(err, result2) {
        if (err) {
          console.log(err.toString());
          res.status(500).send('Database error');
          return;
        }
      })
    });
    res.redirect('/');
  });
});

app.delete('/questions/:id', (req, res) => {
  let questionID = req.params.id;
  let sql = `delete from questions where id = ?`;
  connection.query(sql, [questionID], function(err, result) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json({
      "message": "OK"
    });
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);  
});