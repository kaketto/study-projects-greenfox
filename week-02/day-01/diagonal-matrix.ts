
// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

'use strict';

let matrix: number[] = [];
let countLine: number = 4;
//let arr: number[] = [];
//matrix[1].push(0);
//console.log(matrix);


for (let i: number = 0; i < countLine; i++) {
    if (i == countLine - 1) {
        matrix.push(1);
    } else {
        matrix.push(0);
    }

}
//console.log(arr);
console.log(matrix);



