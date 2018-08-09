'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

let size: number = 50;

for (let row: number = 0; row < 1000; row += size) {
    let column: number;
    if (row % (size * 2) == 0) {
        column = 0;
    } else {
        column = size;
    }
    for (column; column < 1000; column += size * 2) {
            ctx.fillRect(row, column, size, size);
    }
}
