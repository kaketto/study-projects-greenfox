// Create a method that decrypts duplicated-chars.txt

'use strict';
export {};

const fs = require('fs');

function removeDuplicates(fileName: string) {
  let fileContent: string = fs.readFileSync(fileName, 'utf-8');
  let decryptedText: string = '';
  for (let i:number = 0; i < fileContent.length; i += 2) {
    decryptedText += fileContent.slice(i, i+1);
  }
  return decryptedText;
}

function createDecryptedFile(fileName: string, data:string) {
  fs.writeFileSync(fileName, data);
}

console.log(removeDuplicates('duplicated-chars.txt'));
createDecryptedFile('single-chars.txt', removeDuplicates('duplicated-chars.txt'))
