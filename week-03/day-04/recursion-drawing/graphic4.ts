'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawHexagon(xCoord, yCoord ,lineSize) {
  let yCoordMove: number = lineSize * Math.sqrt(3) / 2;
  ctx.beginPath();
  ctx.moveTo(xCoord + lineSize / 2, yCoord + 0);
  ctx.lineTo(xCoord + lineSize * 1.5, yCoord + 0);
  ctx.lineTo(xCoord + lineSize * 2, yCoord + yCoordMove);
  ctx.lineTo(xCoord + lineSize * 1.5, yCoord + yCoordMove * 2);
  ctx.lineTo(xCoord + lineSize / 2, yCoord + yCoordMove * 2);
  ctx.lineTo(xCoord + 0, yCoord + yCoordMove);
  ctx.lineTo(xCoord + lineSize / 2, yCoord + 0);
  ctx.stroke();
}

function recursiveHexagons(xCoordinate: number, yCoordinate: number, 
  changingSize: number) {
  drawHexagon(xCoordinate, yCoordinate, changingSize); 
  if (changingSize > 10) {
    recursiveHexagons(xCoordinate + changingSize / 4, yCoordinate, changingSize / 2);
    recursiveHexagons(xCoordinate + changingSize, yCoordinate + 
      (changingSize * Math.sqrt(3) / 4), changingSize / 2);
    recursiveHexagons(xCoordinate + changingSize / 4, yCoordinate + 
      (changingSize * Math.sqrt(3) / 2), changingSize / 2);
  }
}

recursiveHexagons(5, 50, canvas.width / 2 - 10);
