'use strict';

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

let line: string;
let item: string;

for (let i: number = 0; i < lineCount; i++) {
    if ( i == 0 || i == lineCount - 1) {
        for (line = '%'; line.length < lineCount; line += item) {
            item = '%'
        }
    } else {
        for ( line = '%'; line.length < lineCount; line += item) {
            if (line.length == i || line.length == lineCount - 1 ) {
                item = '%';
            } else {
                item = ' ';
            }
        }
    }    
    console.log(line);
}

