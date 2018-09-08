// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';

const fs = require('fs');

function numberOfLines(file:string) {
  try {
    fs.openSync(file);
    let fileContentArray: string[] = fs.readFileSync(file, 'utf-8').split('\n');
    return fileContentArray.length;
  } catch (e) {
      return 0;
  }
}

console.log(numberOfLines('my-file.txt'));
console.log(numberOfLines('my-files.txt'));

