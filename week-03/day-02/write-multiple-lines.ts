// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.

'use strict';

const fs = require('fs');

const isAccessable = (path: string): boolean => {
  try {
    fs.accessSync(path);
    return true;
  } catch (e) {
    return false;
  }
}
console.log(isAccessable('multi-lines.txt'));

function writeMultipleLines (path:string, word:string, number:number) {
  if (isAccessable(path)) {
    fs.writeFileSync(path, word + '\n');
    for (let i: number = 1; i < number; i++) {
      fs.appendFileSync(path, word + '\n')
    }
    console.log(fs.readFileSync(path, 'utf-8'));  
  } else {
    return;
  }
}


writeMultipleLines('multi-lines.txt', 'Romanes eunt domus', 10);
