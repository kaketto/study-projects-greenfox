'use strict';
import { Plant } from "./plant";

export class Flower extends Plant {

  constructor(color: string) {
    super(color);
    this.color = color;
    this.waterAmount = 4;
    this.needWaterLimit = 5;
    this.waterAbsorbation = 0.75;
  }
}

