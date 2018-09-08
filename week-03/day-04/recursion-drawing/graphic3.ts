'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function squarez(x, y, x2, y2) {
  ctx.strokeRect(x + x2 / 3, y, x2 / 3, y2 / 3);
  ctx.strokeRect(x, y + y2 / 3, x2 / 3, y2 / 3);
  ctx.strokeRect(x + x2 / 3 * 2, y + y2 / 3, x2 / 3, y2 / 3);
  ctx.strokeRect(x + x2 / 3, y + y2 / 3 * 2, x2 / 3, y2 / 3);
 }
 
function recursion(x, y, x2, y2) {
  squarez(x, y, x2, y2);
  if (x2 > 1) {
  recursion(x + x2 / 3, y, x2 / 3, y2 / 3);
  recursion(x, y + y2 /3 , x2 / 3, y2 / 3);
  recursion(x + x2 / 3 * 2, y + y2/3, x2 / 3, y2 / 3);
  recursion(x + x2 / 3, y + y2 /3 * 2, x2 / 3, y2 / 3);
  }
}
 
recursion(0, 0, canvas.width, canvas.height);