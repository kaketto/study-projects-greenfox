
// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

'use strict';

let listOfnumbers: number[] = [1, 5, 65, 34, 78];
function sum(arrayNumber: number[], param: number): number {
    let sumOfNumbers: number = 0;
    for (let i: number = 0; i < param; i++) {
        sumOfNumbers += arrayNumber[i];
    }
    return sumOfNumbers;
}

console.log(sum(listOfnumbers, 3));
