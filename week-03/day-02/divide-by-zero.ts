// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

'use strict';

function divide(number: number): number {
  if (number === 0) {
    throw new Error('fail');    
  }
  return 10 / number;
}

//console.log(divide(0));

try {
  console.log(divide(0));
} catch (e) {
  console.log(e.message);
}






  