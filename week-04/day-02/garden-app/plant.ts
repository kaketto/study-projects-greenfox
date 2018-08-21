'use strict';

export class Plant {
  protected color: string;
  protected waterAmount: number;
  protected needWaterLimit: number;
  protected waterAbsorbation: number;

  constructor(color: string) {
    this.color = color;
  }

  needWater(): boolean {
    if (this.waterAmount < this.needWaterLimit) {
      return true;
    }
  }

  getWater(water: number): void {
    this.waterAmount += water * this.waterAbsorbation;
  }

  getColor(): string {
    return this.color;
  }
}
