'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let dots1: any[][] = [[10, 10], [290,  10], [290, 290], [10, 290]]
let dots2: any[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],[120, 100], [85, 130], [50, 100]]

function drawLines (list: any[][]) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(list[0][0], list[0][1]);
    list.forEach(coordinate => ctx.lineTo(coordinate[0], coordinate[1]));

    /*below for loop does the same as .forEach above:
    for (let i: number = 1; i < list.length; i++) {
        ctx.lineTo(list[i][0], list[i][1]);
    }
    */
    ctx.lineTo(list[0][0], list[0][1]);
    ctx.stroke();
}

drawLines(dots1);
drawLines(dots2);

//how to change all x coordinates to move the same drawing to the right for instance
let dots3 = dots2.map(function(coordinates: any[]) {
    return [coordinates[0] + 110, coordinates[1]];
});

//method 2
function calculateNewCoordinates(coordinates: any[]): number[] {
    return [coordinates[0] + 150, coordinates[1]];
}
let dots4 = dots2.map(elem => calculateNewCoordinates(elem));

drawLines(dots3);
drawLines(dots4);
