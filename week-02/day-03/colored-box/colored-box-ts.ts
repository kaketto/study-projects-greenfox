'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(100, 50);
ctx.lineTo(200, 50);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(200, 50);
ctx.lineTo(200, 150);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(200, 150);
ctx.lineTo(100, 150);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'yellow';
ctx.moveTo(100, 150);
ctx.lineTo(100, 50);
ctx.stroke();
