'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let line: string = '';
let item: string;

for (let i: number = 0; i < lineCount/2; i++) {
    for (line = ''; line.length < lineCount; line += item) {
        if (line.length > lineCount/2 - i - 1 && line.length < lineCount/2 + i) {
            item = '*';
        } else {
            item = ' ';
        }
    }    
    console.log(line);
}

for (let i: number = lineCount; i > lineCount/2 + 1; i--) {
    for (line = ''; line.length < lineCount; line += item) {
        if (line.length > lineCount - i && line.length < i - 1) {
            item = '*';
        } else {
            item = ' ';
        }
    }    
    console.log(line);
}
