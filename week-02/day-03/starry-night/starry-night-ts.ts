
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillRect(0, 0, canvas.width, canvas.height);

let numberOfSmallStars: number = Math.floor(Math.random() * 50);
let numberOfBigStars: number = Math.floor(Math.random() * 30);
let shadesOfGrey: string[] = ['#b0b3b7', '#d4d6d8', '#4a4b4c', '#6e7377', '#5f6060', '#aeb2b2']

function smallStar(x, y, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x, y);
    ctx.lineTo(x + 3, y - 1);
    ctx.lineTo(x + 4, y - 4);
    ctx.lineTo(x + 5, y - 1);
    ctx.lineTo(x + 8, y);
    ctx.lineTo(x + 5, y + 1);
    ctx.lineTo(x + 4, y + 4);
    ctx.lineTo(x + 3, y + 1);
    ctx.fill();
}

function bigStar(x, y, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x, y);
    ctx.lineTo(x + 6, y - 2);
    ctx.lineTo(x + 8, y - 8);
    ctx.lineTo(x + 10, y - 2);
    ctx.lineTo(x + 16, y);
    ctx.lineTo(x + 10, y + 2);
    ctx.lineTo(x + 8, y + 8);
    ctx.lineTo(x + 6, y + 2);
    ctx.fill();
}

for (let i: number = 0; i < numberOfSmallStars; i++) {
    let coordinateX: number = Math.floor(Math.random() * canvas.width);
    let coordinateY: number = Math.floor(Math.random() * canvas.height);
    let randomGrey: string = shadesOfGrey[Math.floor(Math.random() * shadesOfGrey.length)];
    smallStar(coordinateX, coordinateY, randomGrey);
}

for (let j: number = 0; j < numberOfBigStars; j++) {
    let coordinateX: number = Math.floor(Math.random() * canvas.width);
    let coordinateY: number = Math.floor(Math.random() * canvas.height);
    let randomGrey: string = shadesOfGrey[Math.floor(Math.random() * shadesOfGrey.length)];
    bigStar(coordinateX, coordinateY, randomGrey);
}



