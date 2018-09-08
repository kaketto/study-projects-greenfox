'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.save();

function drawChickenleg(xCoord, yCoord, size, angle) {
  let multiplierX: number = Math.sin(angle * Math.PI / 180);
  let multiplierY: number = Math.sin((90 - angle) * Math.PI / 180);
  ctx.translate(xCoord, yCoord)
  ctx.rotate(angle * Math.PI / 180);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 0 - size);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 0 + size);
  ctx.moveTo(0, 0);
  ctx.lineTo(0 - size * multiplierX, 0 - size * multiplierY);
  ctx.moveTo(0, 0);
  ctx.lineTo(0 + size * multiplierX, 0 - size * multiplierY);
  ctx.stroke();
}

function recursiveChickenlegs(xCoordinate, yCoordinate, changingSize, angle) {
  let multiplierX: number = Math.sin(angle * Math.PI / 180);
  let multiplierY: number = Math.sin((90 - angle) * Math.PI / 180);
  drawChickenleg(xCoordinate, yCoordinate, changingSize, angle);
  if (changingSize > 15) {
    recursiveChickenlegs(changingSize * multiplierX, - changingSize * multiplierY, changingSize * 0.9, angle);
  }
  ctx.restore();
}

recursiveChickenlegs(250, 400, 50, 15);
recursiveChickenlegs(250, 400, 50, -15);

function recursiveChickenlegs2(xCoordinate, yCoordinate, changingSize, angle) {
  let multiplierX: number = Math.sin(angle * Math.PI / 180);
  let multiplierY: number = Math.sin((90 - angle) * Math.PI / 180);
  drawChickenleg(xCoordinate, yCoordinate, changingSize, angle);
  if (changingSize > 15) {
    recursiveChickenlegs(changingSize * multiplierX, - changingSize * multiplierY, changingSize * 0.9, angle);
  }
}


// ctx.restore();
// function recursiveChickenlegs2(xCoordinate, yCoordinate, changingSize, angle) {
//   let multiplierX: number = Math.sin(angle * Math.PI / 180);
//   let multiplierY: number = Math.sin((90 - angle) * Math.PI / 180);
//   drawChickenleg(xCoordinate, yCoordinate, changingSize, angle);
//   if (changingSize > 15) {
//     recursiveChickenlegs(changingSize * multiplierX, - changingSize * multiplierY, changingSize * 0.9, angle);
//   }
// }

// recursiveChickenlegs(250, 400, 50, -15);

