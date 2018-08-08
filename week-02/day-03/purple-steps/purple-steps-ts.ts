'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function drawLittleSquare (x: number, y: number, size: number) {
    ctx.strokeRect(x, y, size, size);
    ctx.fillStyle = 'rgb(175, 65, 244)';
    ctx.fillRect(x, y, size, size);
}

for (let i: number = 10; i < 19*11; i += 11) {
    drawLittleSquare(i, i, 10);
}


