
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

//ctx.strokeStyle = 'green';
ctx.lineTo(200, 150);
ctx.stroke();

//ctx.strokeStyle = 'blue';
ctx.lineTo(100, 150);
ctx.stroke();

ctx.strokeStyle = 'yellow';
ctx.lineTo(100, 50);
ctx.stroke();

ctx.fillStyle = 'red';
ctx.fillRect(200, 200, 100, 100);

ctx.fillStyle = 'yellow';
ctx.fillRect(200, 200, 50, 50);

ctx.fillStyle = 'yellow';
ctx.fillRect(150, 150, 50,50);

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(250, 0);
ctx.lineTo(250, 500);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(270, 150);
ctx.lineTo(270, 500);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(270, 0);
ctx.lineTo(270, 250);
ctx.stroke();