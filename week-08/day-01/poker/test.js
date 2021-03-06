'use strict';
const tape = require('tape');
const source = require('./poker-checker');

let handBlack = ['2H', '3D', '5S', '9C', 'KD'];
let handWhite = ['7C', '8H', '9S', 'TC', 'JH'];
let cheater1 = ['2L', '3H', 'LH', '8C', 'AH'];
let cheater2 = ['2C', 'AH', '4S', '8C', 'AH'];
let hand1 = ['2S', '8S', 'AS', 'QS', '3S'];
let hand2 = ['2H', '4S', '4C', '2D', '4H'];
let straightFlush = ['8H', '9H', 'TH', 'JH', 'QH']

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
  const result = -1;
  t.equal(result,source.compareTwoCards('2H', '5S'));
  t.end();
});

tape.test('which wins?', t => {
  const result = -1;
  t.equal(result,source.compareTwoCards('2H', 'TH'));
  t.end();
});

tape.test('which wins?', t => {
  const result = 0;
  t.equal(result,source.compareTwoCards('2H', '2S'));
  t.end();
});

tape.test('which wins?', t => {
  const result = 0;
  t.equal(result,source.compareTwoCards('KH', 'KH'));
  t.end();
});

tape.test('which wins?', t => {
  const result = -1;
  t.equal(result,source.compareTwoCards('KD', 'AH'));
  t.end();
});

tape.test('which wins?', t => {
  const result = -1;
  t.equal(result,source.compareTwoCards('JD', 'QS'));
  t.end();
});

tape.test('sort cards', t => {
  const result = ['2S', '3S', '8S', 'QS', 'AS'];
  t.deepEqual(result,source.sortCards(hand1));
  t.end();
});

tape.test('sort cards', t => {
  const result = ['2H', '2D', '4S', '4C', '4H'];
  t.deepEqual(result,source.sortCards(hand2));
  t.end();
});

tape.test('is a straight?', t => {
  const result = false;
  t.deepEqual(result,source.isAStraight(hand1));
  t.end();
});

tape.test('is a straight?', t => {
  const result = true;
  t.deepEqual(result,source.isAStraight(handWhite));
  t.end();
});

tape.test('is a flush?', t => {
  const result = true;
  t.equal(result,source.isAFlush(hand1));
  t.end();
});

tape.test('is a flush?', t => {
  const result = false;
  t.equal(result,source.isAFlush(handBlack));
  t.end();
});

tape.test('is a straight flush?', t => {
  const result = true;
  t.equal(result,source.isAStraightFlush(straightFlush));
  t.end();
});

tape.test('is a straight flush?', t => {
  const result = false;
  t.equal(result,source.isAStraightFlush(handBlack));
  t.end();
});
