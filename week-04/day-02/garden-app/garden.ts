'use strict';
import { Flower } from "./flower";
import { Plant } from "./plant";

export class Garden {
  private plants: Plant[];

  constructor() {
    this.plants = [];
  }

  addPlant(newPlant: Plant): void {
    this.plants.push(newPlant);
  }

  watering(wateringAmount: number): void {
    let count: number = 0;
    this.plants.forEach(item => { if (item.needWater) {count++;}});
    this.plants.forEach(item => { if (item.needWater) {item.getWater(wateringAmount / count)}});
    console.log(`Watering with ${wateringAmount}`);
  }

  print(): void {
    this.plants.forEach(item => {
      console.log(`The ${item.getColor()} ${item instanceof Flower ? 'Flower' : 'Tree'} ${item.needWater() ? 'needs water' : 'doesn\'t need water'}`);
      })
  }
}
