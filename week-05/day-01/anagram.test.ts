import { test } from 'tape';
import { isAnagram } from './anagram';

test(t => {
  let string1: string = 'sas';
  let string2: string = 'ssa';

  let result = isAnagram(string1, string2);

  t.equal(result, true);
  t.end();
});

test(t => {
  let string1: string = 'sas';
  let string2: string = 'ssd';

  let result = isAnagram(string1, string2);

  t.equal(result, false);
  t.end();
});
