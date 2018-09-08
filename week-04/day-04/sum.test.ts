import { test } from 'tape';
import { Sum } from './sum';

test('sum class', t => {
  let list1: Sum = new Sum([3, 6, 8, 9]);
  const actual = list1.sum();
  const expected = 26;

  t.equal(actual, expected, 'should be the sum of the integers');
  t.end();
});

test('sum class', t => {
  let list1: Sum = new Sum([]);
  const actual = list1.sum();
  const expected = 0;

  t.equal(actual, expected, 'should be zero');
  t.end();
});

test('sum class', t => {
  t.throws(new Sum(null), 'Add a list of integers');
  t.end();
});

test('sum class', t => {
  let list1: Sum = new Sum([1]);
  const actual = list1.sum();
  const expected = 1;

  t.equal(actual, expected, 'should equal to the only one element');
  t.end();
});

test('sum class', t => {
  let list1: Sum = new Sum([1, 2, -4]);
  const actual = list1.sum();
  const expected = -1;

  t.equal(actual, expected, 'should be the sum of the integers');
  t.end();
});

test('sum class', t => {
  let list1: Sum = new Sum([1, 2, 'valami', 6]);
  const actual = list1.sum();
  const expected = undefined;

  t.equal(actual, expected, 'should be undefined if list includes a non-number element');
  t.end();
});


