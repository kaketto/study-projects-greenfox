'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'yellow';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawBoxes(xCoord, yCoord, size) {
  ctx.beginPath();
  ctx.moveTo(xCoord + (size / 3), yCoord + 0);
  ctx.lineTo(xCoord + (size / 3), yCoord + size);
  ctx.moveTo(xCoord + (size / 3 * 2), yCoord + 0);
  ctx.lineTo(xCoord + (size / 3 * 2), yCoord + size);
  ctx.moveTo(xCoord + 0, yCoord + (size / 3));
  ctx.lineTo(xCoord + size, yCoord + (size / 3));
  ctx.moveTo(xCoord + 0, yCoord + (size / 3 * 2));
  ctx.lineTo(xCoord + size, yCoord + (size / 3 * 2));
  ctx.stroke();
}

function recursiveBoxes(xCoordinate, yCoordinate, changingSize: number, minSize) {
  if (changingSize > minSize) {
    drawBoxes(xCoordinate, yCoordinate, changingSize)
    recursiveBoxes(xCoordinate + (changingSize/ 3), yCoordinate, changingSize / 3, minSize);
    recursiveBoxes(xCoordinate, yCoordinate + (changingSize/ 3), changingSize / 3, minSize);
    recursiveBoxes(xCoordinate + (changingSize/ 3 * 2), yCoordinate + (changingSize/ 3), changingSize / 3, minSize);
    recursiveBoxes(xCoordinate + (changingSize/ 3), yCoordinate + (changingSize/ 3 * 2), changingSize / 3, minSize);
  }
}

recursiveBoxes(0, 0, canvas.width, 6);