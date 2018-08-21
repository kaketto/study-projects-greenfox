'use strict';
import { Plant } from "./plant"

export class Tree extends Plant {

  constructor(color: string) {
    super(color);
    this.color = color;
    this.waterAmount = 5;
    this.needWaterLimit = 10;
    this.waterAbsorbation = 0.4;
  }
}


