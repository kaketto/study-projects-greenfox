'use strict';

export function nThFibonacciNumber (n: number) {
  if (n < 0) {
    throw new Error('Works with positive numbers only')
  }
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
   return nThFibonacciNumber(n-1) + nThFibonacciNumber(n-2)
  } 
}

console.log(nThFibonacciNumber(10));
