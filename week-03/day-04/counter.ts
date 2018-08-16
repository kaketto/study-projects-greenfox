// Write a recursive function that takes one parameter: n and counts down from n.

'use strict';

function countDown(n: number) {
  if (n === 0) {
    console.log(0);
  } else {
    console.log(n);
    return countDown(n - 1);
  }
}

countDown(5);