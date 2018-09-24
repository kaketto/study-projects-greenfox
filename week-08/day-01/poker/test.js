'use strict';
const tape = require('tape');
const source = require('./poker-checker');

let handBlack = ['2H', '3D', '5S', '9C', 'KD'];
let handWhite = ['2C', '3H', '4S', '8C', 'AH'];
let cheater1 = ['2L', '3H', 'LH', '8C', 'AH'];
let cheater2 = ['2C', 'AH', '4S', '8C', 'AH'];


tape.test('can I have a green test?', t => {
  const result = 2;
  t.equal(result,source.addTwoNumbers(1, 1));
  t.end();
});

tape.test('valid card?', t => {
  const result = true;
  t.equal(result,source.isCardValid('6C'));
  t.end();
});

tape.test('valid card?', t => {
  const result = false;
  t.equal(result,source.isCardValid('ST'));
  t.end();
});

tape.test('valid hand?', t => {
  const result = true;
  t.equal(result,source.isHandValid(handBlack));
  t.end();
});

tape.test('valid hand?', t => {
  const result = false;
  t.equal(result,source.isHandValid(cheater1));
  t.end();
});

tape.test('valid hand?', t => {
  const result = false;
  t.equal(result,source.isHandValid(cheater2));
  t.end();
});

tape.test('which wins?', t => {
  const result = '5S';
  t.equal(result,source.compareTwoCards('2H', '5S'));
  t.end();
});

tape.test('which wins?', t => {
  const result = 'TH';
  t.equal(result,source.compareTwoCards('2H', 'TH'));
  t.end();
});

tape.test('which wins?', t => {
  const result = 'equal';
  t.equal(result,source.compareTwoCards('2H', '2S'));
  t.end();
});

tape.test('which wins?', t => {
  const result = 'equal';
  t.equal(result,source.compareTwoCards('KH', 'KH'));
  t.end();
});

tape.test('which wins?', t => {
  const result = 'AH';
  t.equal(result,source.compareTwoCards('KD', 'AH'));
  t.end();
});

tape.test('which wins?', t => {
  const result = 'QS';
  t.equal(result,source.compareTwoCards('JD', 'QS'));
  t.end();
});