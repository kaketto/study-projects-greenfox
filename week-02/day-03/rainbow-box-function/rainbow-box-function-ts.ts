
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let rainbowColors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function drawRainbowSquares (size: number, color: string) {
    ctx.fillStyle = color;
    ctx.fillRect((canvas.width - size) / 2, (canvas.height - size) / 2, size, size); 
}

/* RANDOM SIZE SQUARES WITH RANDOM COLORS
for (let i: number = canvas.height / 2; i > 0; i--) {
    let rgbRandom = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    drawRainbowSquares(Math.floor(Math.random() * canvas.height), rgbRandom);
}
*/

// RANDOM BUT FIXED DISTANCE SQUARES WITH RAINBOW COLORS
// let sizeDiff: number = Math.floor(Math.random() * 100);
// let squareSize: number = canvas.height;
// for (let i: number = 0; i < canvas.height / sizeDiff; i++) {
//     drawRainbowSquares(squareSize, rainbowColors[i % rainbowColors.length]);
//     squareSize -= sizeDiff;
// }

//RECURSIVE SOLUTION WITH DYNAMIC DIFFERENT SIZES
function recursiveSquare (size: number, difference: number, colorIndex: number) {
    if (size > 10) {
        drawRainbowSquares(size, rainbowColors[colorIndex]);
        recursiveSquare(size - difference, difference, (colorIndex + 1) % rainbowColors.length);
    }
}

recursiveSquare(canvas.height, 50, 0);
