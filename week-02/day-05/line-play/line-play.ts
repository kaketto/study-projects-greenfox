'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let numberOfLines: number = 15;
let diff: number = (canvas.height - 20) / numberOfLines;
console.log(diff);

let topLeftCorner: number[] = [10, 10];

for (let i: number = 1; i < numberOfLines; i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(topLeftCorner[0], topLeftCorner[1] + i * diff);
    ctx.lineTo(topLeftCorner[0] + i * diff, topLeftCorner[1] + diff * numberOfLines);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(topLeftCorner[0] + i * diff, topLeftCorner[1]);
    ctx.lineTo(topLeftCorner[0] + numberOfLines * diff, topLeftCorner[1] + i * diff);
    ctx.stroke();
}

/* tried making shorter - in progress

function drawLine (x, y, color, i) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x, y + i * diff);
    ctx.lineTo(x + i * diff, y + diff * numberOfLines);
    ctx.stroke();
}

for (let j: number = 1; j < numberOfLines; j++) {
    drawLine(topLeftCorner[0], topLeftCorner[1], 'green', j);
}

*/
