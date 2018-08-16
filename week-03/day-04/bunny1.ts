// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).
'use strict';

function numberOfBigFloppyEars(numberOfBunnies: number) {
  if (numberOfBunnies === 1) {
    return 2;
  } else {
    return 2 + numberOfBigFloppyEars(numberOfBunnies - 1); 
  }
}

console.log(numberOfBigFloppyEars(15));
