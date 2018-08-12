'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let numbersToCheck: number[] = [4, 8, 10, 16];

function checkNums(arr: number[]) {
    let results: boolean[] = [];
    for (let i: number = 0; i < numbersToCheck.length; i++) {
        results.push(arr.some(elem => elem === numbersToCheck[i]));
    }
    return results.every(elem => elem === true);
}

console.log(checkNums(listOfNumbers));

export = checkNums;
