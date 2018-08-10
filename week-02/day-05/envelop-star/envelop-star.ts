'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let numberOfLines: number = 15;
let diff: number = (canvas.height) / numberOfLines / 2;
console.log(diff);

let middleLines: number[] = [canvas.width / 2, canvas.height / 2];

for (let i: number = 1; i < numberOfLines; i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    //top right corner
    ctx.moveTo(middleLines[0], i * diff);
    ctx.lineTo(middleLines[0] + i * diff, diff * numberOfLines);
    // bottom left corner
    ctx.moveTo(i * diff, middleLines[1]);
    ctx.lineTo(numberOfLines * diff, middleLines[1] + i * diff);
    // top left corner
    ctx.moveTo(middleLines[0], i * diff);
    ctx.lineTo(middleLines[0] - i * diff, middleLines[1]);
    // bottom right corner
    ctx.moveTo(middleLines[0] + i * diff, middleLines[1]);
    ctx.lineTo(middleLines[0], canvas.height - i * diff);
    ctx.stroke();
}

