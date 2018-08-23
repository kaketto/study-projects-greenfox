import { test } from 'tape';
import { isAnagram } from './anagram';

test('isAnagram function', t => {
  const actual = isAnagram('salesmen', 'nameless');
  const expected = true;

  t.equal(actual, expected, 'they are anagrams');
  t.end();
});

test('isAnagram function', t => {
  const actual = isAnagram('salesmen', 'name');
  const expected = false;

  t.equal(actual, expected, 'they are anagrams');
  t.end();
});

test('isAnagram function', t => {
  const actual = isAnagram('salesmen', 'valamimas');
  const expected = false;

  t.equal(actual, expected, 'they are anagrams');
  t.end();
});

test('isAnagram function', t => {
  const actual = isAnagram('salesmen', '');
  const expected = false;

  t.equal(actual, expected, 'they are anagrams');
  t.end();
});
