'use strict';

export class Flower {
  private color: string;
  private waterAmount: number;

  constructor(color: string) {
    this.color = color;
    this.waterAmount = 4;
  }

  needWater(): boolean {
    if (this.waterAmount < 5) {
      return true;
    }
  }

  getWater(water: number): void {
    this.waterAmount += water * 0.75;
  }

  getColor(): string {
    return this.color;
  }
}
