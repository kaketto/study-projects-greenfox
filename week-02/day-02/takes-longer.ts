'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"
let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'

let index:number = quote.indexOf('you');
let newQuote: string = quote.replace('It you', 'It always takes longer than you');
console.log(newQuote);

let firstPart: string = quote.substring(0, index);
let missingPart: string = 'always takes longer than';
let secondPart: string = quote.substr(index, quote.length);

let newQuote2: string = firstPart.concat(missingPart, ' ', secondPart);
console.log(newQuote2);



