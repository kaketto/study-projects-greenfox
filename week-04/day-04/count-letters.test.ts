import { test } from 'tape';
import { CountLetters } from './count-letters';

test('count letters function', t => {
  const actual = CountLetters('maxim    alis ext azis');
  const expected = { a: 3, e: 1, i: 3, l: 1, m: 2, s: 2, t: 1, x: 2, z: 1 };

  t.deepEqual(actual, expected, 'count letters function works');
  t.end();
});

test('count letters function', t => {
  const actual = CountLetters('2');
  const expected = { 2: 1 };

  t.deepEqual(actual, expected, 'count letters function works');
  t.end();
});

test('count letters function', t => {
  const actual = CountLetters('');
  const expected = {};

  t.deepEqual(actual, expected, 'count letters function works');
  t.end();
});

