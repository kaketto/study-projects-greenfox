
'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(arr: number[]) {
    if (arr.some(elem => elem === 7)) {
        return "Hooray";
    } else {
        return 'Nooooo';
    }
}

console.log(containsSeven(numbers));

function containsSeven2(arr: number[]) {
    if (arr.indexOf(7) === -1) {
        return "Nooooo";
    } else {
        return "Hooray";
    }
}

console.log(containsSeven2(numbers));

export = containsSeven;
