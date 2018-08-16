// Create a recursive function called `refactorio`
// that returns it's input's factorial

'use strict';

function refactorio(number: number) {
  if (number ===1 ) {
    return 1;
  } else {
    return number * refactorio(number -1); 
  }
}

console.log(refactorio(5));
