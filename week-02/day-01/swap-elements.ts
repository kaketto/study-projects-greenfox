
// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

'use strict';

let abc: string[] = ['Arthur', 'Boe', 'Chloe'];

[abc[0], abc[1], abc[2]] = [abc[2], abc[1], abc[0]];
console.log(abc);




