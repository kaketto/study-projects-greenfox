
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

function randomNumber (max: number) {
    return Math.floor(Math.random() * max);
} 

let numberOfSmallStars: number = randomNumber(50);
let numberOfBigStars: number = randomNumber(30);
let shadesOfGrey: string[] = ['#b0b3b7', '#d4d6d8', '#4a4b4c', '#6e7377', '#5f6060', '#aeb2b2'];

function drawStar(x, y, color, isSmall: boolean) {
    let a: number;
    if (isSmall) {
        a = 1;
    } else {
        a = 2;
    }
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x, y);
    ctx.lineTo(x + 3 * a, y - 1 * a);
    ctx.lineTo(x + 4 * a, y - 4 * a);
    ctx.lineTo(x + 5 * a, y - 1 * a);
    ctx.lineTo(x + 8 * a, y);
    ctx.lineTo(x + 5 * a, y + 1 * a);
    ctx.lineTo(x + 4 * a, y + 4 * a);
    ctx.lineTo(x + 3 * a, y + 1 * a);
    ctx.fill();
}

/*  DRAW BIG STARS - NOT NEEDED ANY MORE
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
*/

function generateStar (numberOfStars: number, isSmall: boolean) {
    for (let i: number = 0; i < numberOfStars; i++) {
        let coordinateX: number = randomNumber(canvas.width);
        let coordinateY: number = randomNumber(canvas.height);
        let randomGrey: string = shadesOfGrey[randomNumber(shadesOfGrey.length)];
        drawStar(coordinateX, coordinateY, randomGrey, isSmall);
    }
}

generateStar(numberOfSmallStars, true);
generateStar(numberOfBigStars, false);

/* GENERATE BIG STARS - NOT NEEDED ANY MORE
for (let j: number = 0; j < numberOfBigStars; j++) {
    let coordinateX: number = randomNumber(canvas.width);
    let coordinateY: number = randomNumber(canvas.height);
    let randomGrey: string = shadesOfGrey[randomNumber(shadesOfGrey.length)];
    star(coordinateX, coordinateY, randomGrey, false);
}
*/