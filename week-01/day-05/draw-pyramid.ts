'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let line: string = '';
let item: string;

for (let i: number = 0; i < lineCount; i++) {
    for (line = ''; line.length < lineCount * 2; line += item) {
        if (line.length > lineCount - i - 2 && line.length < lineCount + i) {
            item = '*';
        } else {
            item = ' ';
        }
    }    
    console.log(line);
}
