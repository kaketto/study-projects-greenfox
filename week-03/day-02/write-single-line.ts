// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

'use strict';
export {};

const fs = require('fs');

function writeAndReadMyName(fileName: string, myName: string) {
  try {
    fs.writeFileSync(fileName, myName);
  } catch (e) {
    throw new Error(`Unable to write file: ${fileName}`)
  }
  return fs.readFileSync(fileName, 'utf-8');
}

console.log(writeAndReadMyName('my-file.txt', 'Kinga Moldovanyi'));
