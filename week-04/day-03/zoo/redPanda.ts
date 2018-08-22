'use strict';
import { Mammal } from "./mammal";

export class RedPanda extends Mammal {
  
  constructor(age: number){
    super();
    this.name = 'Red Panda';
    this.latinName = 'Ailurus fulgens';
    this.isEndangered = true;
    this.nativeIn = 'eastern Himalayas and China';
    this.age = age;
    this.isHungry = false;
    this.timeOfGestation = 130;
  }

  eat(): void {
    this.isHungry = false;
    console.log('I am crunching bamboo'); 
  }
}