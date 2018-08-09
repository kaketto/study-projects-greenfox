'use strict';

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4

let randomNumbers: number[] = [];
let generatedNumberForRounds: number;
let generatedIndividualNumber: number;

generatedNumberForRounds = Math.round(Math.random() * 10 + 1);
// to print for checking
console.log(generatedNumberForRounds);

for (let i: number = 0; i < generatedNumberForRounds; i++) {
    generatedIndividualNumber = Math.round(Math.random() * 20);
    randomNumbers.push(generatedIndividualNumber);
}
let sum: number = randomNumbers[0];
// to print for checking
console.log(randomNumbers);

for (let i: number = 1; i < randomNumbers.length; i++) {
    sum += randomNumbers[i];
}
console.log(sum);
console.log(sum / randomNumbers.length);
