'use strict';

import { test } from 'tape';
import { apple } from './apple';

test('check getApple', t => {
  let actual = apple.getApple();
  let expected = 'apple';
  t.equal(actual, expected, 'should return apple');
  t.end();
});

