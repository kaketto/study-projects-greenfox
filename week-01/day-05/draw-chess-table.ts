'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let line: string;
let item: string;

for (let i: number = 0; i < 8; i++) {
    if ( i == 1 || i % 2 !== 0) {
        for (line = ' '; line.length < 8; line += item) {
            if (line.length % 2 !== 0)  {
                item = '%';
            } else {
                item = ' ';
            }
        }
    } else {
        for (line = '%'; line.length < 8; line += item) {
            if (line.length % 2 !== 0) {
                item = ' ';
            } else {
                item = '%';
            }
        }
    }
    console.log(line);
    
}