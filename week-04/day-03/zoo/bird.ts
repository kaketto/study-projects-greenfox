'use strict';
import { LayingEgg } from "./laying-egg";
import { Flyable } from "../flyable/flyable";


export class Bird extends LayingEgg implements Flyable {
  private isMigrating: boolean;
  
  constructor(name:string, age: number, latinName: string, nativeIn: string, incubationPeriod: number, isMigrating?: boolean){
    super();
    this.name = name;
    this.latinName = latinName;
    this.isEndangered = true;
    this.nativeIn = nativeIn;
    this.age = age;
    this.isHungry = false;
    this.incubationPeriod = incubationPeriod;
    this.isMigrating = isMigrating;
  }

  eat(): void {
    this.isHungry = false;
    console.log('Gimme nectar, fruit, insects or other small animals'); 
  }

  migrate(): void {
    if (this.isMigrating) {
      console.log('I have to fly away every winter and come back at spring.');
    } else {
      console.log('Nope, I am staying all winter my friend.');
    }
  }

  land(){}

  fly(){}

  takeOff(){}
}