'use strict';
//  Create a function that takes a number and a list of numbers as a parameter
//  Returns the indeces of the numbers in the list where the first number is part of
//  Returns an empty list if the number is not part any of the numbers in the list
// Example
//console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
//console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'


function subint (number:number, listOfNumbers: any[]) {
    let stringList: string[] = [];
    listOfNumbers.forEach(elem => stringList.push(elem.toString()));
    let theNumberAsString = number.toString();
    let checkResult: boolean[] = stringList.map(elem => elem.match(theNumberAsString) !== null);
    let listOfIndeces: number[] = [];
    for (let i: number = 0; i < checkResult.length; i++) {
        if (checkResult[i]) {
            listOfIndeces.push(i);
        }
    }
    return listOfIndeces;
}

console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'

