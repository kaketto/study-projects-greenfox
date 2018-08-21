'use strict';
import { Flower } from "./flower";
import { Tree } from "./tree";

export class Garden {
  private flowers: Flower[];
  private trees: Tree[];

  constructor() {
    this.flowers = [];
    this.trees = [];
  }

  addFlower(flower: Flower): void {
    this.flowers.push(flower);
  }

  addTree(tree: Tree): void {
    this.trees.push(tree);
  }

  watering(wateringAmount: number): void {
    let count: number = 0;
    this.flowers.forEach(item => { if (item.needWater) {count++;}});
    this.trees.forEach(item => { if (item.needWater) {count++;}});
    this.flowers.forEach(item => { if (item.needWater) {item.getWater(wateringAmount / count)}});
    this.trees.forEach(item => { if (item.needWater) {item.getWater(wateringAmount / count)}});
    console.log(`Watering with ${wateringAmount}`);
  }

  print(): void {
    this.flowers.forEach(item => {
      if (item.needWater()) {console.log(`The ${item.getColor()} Flower needs water`)} 
      else {console.log(`The ${item.getColor()} Flower doesn't need water`)}
    });
    this.trees.forEach(item => {
      if (item.needWater()) {console.log(`The ${item.getColor()} Tree needs water`)} 
      else {console.log(`The ${item.getColor()} Tree doesn't need water`)}
    });
  }
}
