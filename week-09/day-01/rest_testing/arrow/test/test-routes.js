'use strict';

const test = require('tape');
const request = require('supertest');
const routeModule = require('../routes');

test('yondu speed calculation', (t) => {
  request(routeModule)
  .get('/yondu?distance=100.0&time=10.0')
  .expect('Content-Type', /json/)
  .expect(200)
  .end( (err, res) => {
    if (err) {
      t.error(err)
    }
    t.deepEquals(res.body, { distance: "100.0", time: "10.0", speed: 10});
  });
  t.end();
});

test('yondu empty request', (t) => {
  request(routeModule)
  .get('/yondu')
  .expect('Content-Type', /json/)
  .expect(400)
  .end( (err, res) => {
    if (err) {
      t.error(err)
    }
    t.same(res.body, { error: "no data provided"});
  });
  t.end();
});