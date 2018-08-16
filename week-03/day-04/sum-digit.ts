// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

'use strict';

function sumOfDigits (n: number) {
  let sum: number = 0;
  if (n < 10) {
    return sum + n;
  } else {
    return sum + n % 10 + sumOfDigits(Math.floor(n / 10));
  }
}

console.log(sumOfDigits(1987));
