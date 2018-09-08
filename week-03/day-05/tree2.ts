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

function drawChickenleg(xCoord, yCoord, size, angle) {
  let multiplierX: number = Math.sin(angle * Math.PI / 180);
  let multiplierY: number = Math.sin((90 - angle) * Math.PI / 180);
  ctx.rotate(angle * Math.PI / 180);
  ctx.beginPath();
  ctx.moveTo(xCoord, yCoord);
  ctx.lineTo(xCoord, yCoord - size);
  ctx.moveTo(xCoord, yCoord);
  ctx.lineTo(xCoord, yCoord + size);
  ctx.moveTo(xCoord, yCoord);
  ctx.lineTo(xCoord - size * multiplierX, yCoord - size * multiplierY);
  ctx.moveTo(xCoord, yCoord);
  ctx.lineTo(xCoord + size * multiplierX, yCoord - size * multiplierY);
  ctx.stroke();
}