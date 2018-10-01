'use strict';

const test = require('tape');
const request = require('supertest');
const routeModule = require('../routes');

test('get list of calories table', (t) => {
  request(routeModule.app)
  .get('/drax')
  .expect('Content-Type', /json/)
  .expect(200)
  .end( (err, res) => {
    if (err) {
      t.error(err)
    }
    t.same(res.body[0],  { id: 1, name: 'aubergine', amount_grams: 100, calories: 21 });
  });
  t.end();
});

test('delete item from calories table', (t) => {
  request(routeModule.app)
  .delete('/drax/beetroot')
  .expect(204)
  .end( (err, res) => {
    if (err) {
      t.error(err)
    }
    t.end();
  });
});

test('add new item to calories table', (t) => {
  request(routeModule.app)
  .post('/drax/newitem')
  .send({
    "name": "beetroot",
    "amount_grams": 100,
    "calories": 46
  })
  .expect(200)
  .end( (err, res) => {
    if (err) {
      t.error(err)
    }
    t.same(res.body[3],  { id: 5, name: 'cucumber', amount_grams: 100, calories: 13 });
    t.end();
  });
});