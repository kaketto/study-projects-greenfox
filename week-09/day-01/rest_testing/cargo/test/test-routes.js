'use strict';

const test = require('tape');
const request = require('supertest');
const routeModule = require('../routes');

test('get ship status', (t) => {
  request(routeModule)
  .get('/rocket')
  .expect('Content-Type', /json/)
  .expect(200)
  .end( (err, res) => {
    if (err) {
      t.error(err)
    }
    t.deepEquals(res.body, {   
      caliber25: 0,
      caliber30: 0,
      caliber50: 0,
      shipstatus: "empty",
      ready: false});
  });
  t.end();
});

test('fill caliber50 with 5000 ammunition', (t) => {
  request(routeModule)
  .get('/rocket/fill?caliber=.50&amount=5000')
  .expect('Content-Type', /json/)
  .expect(200)
  .end( (err, res) => {
    if (err) {
      t.error(err)
    }
    t.deepEquals(res.body, {   
      received: ".50",
      amount: "5000",
      shipstatus: "40%",
      ready: false});
  });
  t.end();
});

test('fill ship to full', (t) => {
  request(routeModule)
  .get('/rocket/fill?caliber=.50&amount=12500')
  .expect('Content-Type', /json/)
  .expect(200)
  .end( (err, res) => {
    if (err) {
      t.error(err)
    }
    t.same(res.body.shipstatus, "full");
  });
  t.end();
});

test('ready to fly if filled fully', (t) => {
  request(routeModule)
  .get('/rocket/fill?caliber=.50&amount=12500')
  .expect('Content-Type', /json/)
  .expect(200)
  .end( (err, res) => {
    if (err) {
      t.error(err)
    }
    t.same(res.body.ready, true);
  });
  t.end();
});

test('empty parameter on get rocket/fill', (t) => {
  request(routeModule)
  .get('/rocket/fill')
  .expect('Content-Type', /json/)
  .expect(400)
  .end( (err, res) => {
    if (err) {
      t.error(err)
    }
    t.same(res.body, { error: "no ammunition provided"});
  });
  t.end();
});