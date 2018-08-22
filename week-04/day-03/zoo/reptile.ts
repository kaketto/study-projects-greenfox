'use strict';
import { LayingEgg } from "./laying-egg";
import { Animal } from "./animal";

export class Reptile extends LayingEgg {

  constructor(name:string, age: number, latinName: string, nativeIn: string, incubationPeriod: number){
    super();
    this.name = name;
    this.latinName = latinName;
    this.isEndangered = true;
    this.nativeIn = nativeIn;
    this.age = age;
    this.isHungry = true;
    this.incubationPeriod = incubationPeriod;
  }

  eat(): void {
    this.isHungry = false;
    console.log('I am carnivorous.'); 
  }

  predatoring(animal: Animal): void {
    this.isHungry = false;
    console.log('I\'ll catch you!');
  }

  swim(): void {
    this.isHungry = true;
  }
}