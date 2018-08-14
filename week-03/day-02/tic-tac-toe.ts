// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.
// Make sure you have the 3 source files given to you on your computer

'use strict';
export { };

const fs = require('fs');

function ticTacResult(fileName: string) {
  let fileContent: string[] = fs.readFileSync(fileName, 'utf-8').split('\n');
  let firstColumn: string = fileContent[0][0] + fileContent[1][0] + fileContent[2][0];
  let secondColumn: string = fileContent[0][1] + fileContent[1][1] + fileContent[2][1];
  let thirdColumn: string = fileContent[0][2] + fileContent[1][2] + fileContent[2][2];
  let diagonal1: string = fileContent[0][0] + fileContent[1][1] + fileContent[2][2];
  let diagonal2: string = fileContent[0][2] + fileContent[1][1] + fileContent[2][0];
  let columnsAndDiagonals: string[] = [];
  columnsAndDiagonals.push(firstColumn, secondColumn, thirdColumn, diagonal1, diagonal2);
  if (fileContent.some(elem => elem === 'OOO') || columnsAndDiagonals.some(elem => elem === 'OOO')) {
    return 'O';
  } else if (fileContent.some(elem => elem === 'XXX') || columnsAndDiagonals.some(elem => elem === 'XXX')) {
    return 'X';
  } else {
    return 'draw';
  }
}

console.log(ticTacResult('win-o.txt')) // should print O
console.log(ticTacResult('win-x.txt')) // should print X
console.log(ticTacResult('draw.txt')) // should print draw
