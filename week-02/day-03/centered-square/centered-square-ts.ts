'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

let rgbRandom = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
ctx.fillStyle = rgbRandom;

let sizeRandom = Math.floor(Math.random() * canvas.height);
ctx.fillRect((canvas.width - sizeRandom) / 2, (canvas.height - sizeRandom) / 2, sizeRandom, sizeRandom);

