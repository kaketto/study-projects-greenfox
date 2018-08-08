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
    for (let i: number = 1; i < list.length; i++) {
        ctx.lineTo(list[i][0], list[i][1]);
    }
    ctx.lineTo(list[0][0], list[0][1]);
    ctx.stroke();
}

drawLines(dots1);
drawLines(dots2);

/* HOW TO INCREASE ALL X BY 110 WITH .MAP????
let dots3: any[][] = dots1.map([x, y] => [x + 110, y]);

let dots3: any[][] = dots1.map(function (arr, index) {
    arr[index][0] += 70;         
});
*/

let dots3: any[][] = [[170, 100], [190, 70], [200, 90], [210, 90], [220, 70],[240, 100], [205, 130], [170, 100]];
drawLines(dots3);

let dots4: any[][] = [[135, 160], [155,160], [145, 170]];
drawLines(dots4);
