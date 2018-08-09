//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
//  Example
// console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`


'use strict';

let numberList: number[] = [1, 11, 34, 11, 112, 52, 111, 61, 1, 34, 11];

// we need this extra function to sort numbers properly:
function sortNumber(a, b) {
    return a - b;
}

function unique(arr: number[]) {
    arr.sort(sortNumber);
    let newArr: number[] = [];
    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(unique(numberList));

// Internet short solution for unique list with .filter:

function onlyUnique(value, index, arr) {
    return arr.indexOf(value) === index;
}
let uniqueList = numberList.filter(onlyUnique);
console.log(uniqueList.sort(sortNumber));



