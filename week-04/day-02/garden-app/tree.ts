'use strict';

export class Tree {
  private color: string;
  private waterAmount: number;

  constructor(color: string) {
    this.color = color;
    this.waterAmount = 5;
  }

  needWater(): boolean {
    if (this.waterAmount < 10) {
      return true;
    }
  }

  getWater(water: number): void {
    this.waterAmount += water * 0.4;
  }

  getColor(): string {
    return this.color;
  }
}

