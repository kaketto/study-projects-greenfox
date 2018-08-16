// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

'use strict';
export {};

function powerN(base: number, exponent: number): number {
  // let result: number = 1;
  // for (let i: number = exponent; i > 0; i--) {
  //   result *= base;
  // }
  // return result;
  if (base < 1 || exponent < 1) {
    throw new Error('Not working with numbers less than 1')
  }
  if (exponent === 1) { 
    return base;
  }else {
    return base * powerN(base, exponent - 1);
  }
}

let answer: number = powerN(4, 3);
console.log(answer);
