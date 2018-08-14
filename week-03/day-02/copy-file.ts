// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

'use strict';
export {};

const fs = require('fs');

function copyFile (fromFile: string, toFile: string) {
  let fileContent = fs.readFileSync(fromFile, 'utf-8');
  fs.writeFileSync(toFile, fileContent);
  return fs.readFileSync(fromFile, 'utf-8') === fs.readFileSync(toFile, 'utf-8');
}

console.log(copyFile('multi-lines.txt', 'multi-lines2.txt'));


