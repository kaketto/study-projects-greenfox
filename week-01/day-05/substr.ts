'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one
/* function substr(str: string, keyword: string) : number {
  return -1;
}

//  Example
console.log(substr("this is what I'm searching in", "searching"));
// should print: `17`
console.log(substr("this is what I'm searching in", "not"));
// should print: `-1`

*/

let string1: string = 'I am a green fox student.';
let string2: string = 'fox';
let string3: string = 'king';

console.log(string1.indexOf(string2));
console.log(string1.indexOf(string3));

