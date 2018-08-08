'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

function drawSquare (x: number, y: number, size: number) {
    ctx.strokeRect(x, y, size, size);
    ctx.fillStyle = 'rgb(175, 65, 244)';
    ctx.fillRect(x, y, size, size);
}

/* DOUBLE SIZE SQUARES
for (let i: number = 10; i < 19*11; i += i) {
    drawSquare(i+10, i+10, i);
}
*/

let coordinate: number = 10;
for (let i: number = 10; i < 61; i += 10) {
    drawSquare(coordinate, coordinate, i);
    coordinate += i;
}
