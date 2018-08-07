
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

let matrix: number[][] = [];
let countLine: number = 4;

for (let row: number = 0; row < countLine; row++) {
    matrix[row] = [];
    for (let column: number = 0; column < countLine; column++) {
        if (row == countLine - column - 1) {
            matrix[row].push(1);
        } else {
            matrix[row].push(0);
        }
    }
}

matrix.forEach(function (arr: number[]) {
    console.log(arr.join(' '));
});
