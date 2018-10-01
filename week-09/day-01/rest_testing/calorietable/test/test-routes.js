'use strict';

const test = require('tape');
const request = require('supertest');
const routeModule = require('../routes');

test('get list of calories table', (t) => {
  request(routeModule)
  .get('/drax')
  .expect('Content-Type', /json/)
  .expect(200)
  .end( (err, res) => {
    if (err) {
      t.error(err)
    }
    t.notEqual(res.body, []);
  });
  t.end();
});