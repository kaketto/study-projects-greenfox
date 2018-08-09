'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];
let numberOfPairs: number;
if (girls >= boys) {
    numberOfPairs = boys.length;
} else {
    numberOfPairs = girls.length;
}
/*
function makingMatches(list1: string[], list2: string[]) {
    let pairs: string[] = [];
    for (let i: number = 0; i < numberOfPairs; i++) {
        pairs.push(list1[i]);
        pairs.push(list2[i]);
    }
    return pairs;
}

console.log(makingMatches(girls, boys));

export = makingMatches;
*/

function makingMatches(list1, list2) {
    for (let i: number = 1; i < list1.length; i++) {
        list1.splice(i, 0, list2[i-1])
    }
}


