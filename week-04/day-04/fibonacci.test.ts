import { test } from 'tape';
import { nThFibonacciNumber } from './fibonacci';

test('fibonacci function', t => {
  const actual = nThFibonacciNumber(10);
  const expected = 55;

  t.equal(actual, expected, 'nth fibonacci number returns');
  t.end();
});

test('fibonacci function', t => {
  const actual = nThFibonacciNumber(0);
  const expected = 0;

  t.equal(actual, expected, 'nth fibonacci number returns');
  t.end();
});

test('fibonacci function', t => {
  t.throws(nThFibonacciNumber(-1), 'Works with positive numbers only');
  t.end();
});