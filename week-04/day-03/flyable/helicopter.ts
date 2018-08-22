import { Vehicle } from "./vehicle";
import { Flyable } from "./flyable";

'use strict';

class Helicopter extends Vehicle implements Flyable {

  constructor(movingTime: number) {
    super();
    this.name = 'Helicopter';
    this.movingTime = movingTime;
    this.isRoad = false;
  }

  land() {
    console.log('landed');
  }

  fly() {
    console.log(`flying time is ${this.movingTime} minutes`);
  }

  takeOff() {
    console.log('departed');
  }
}

let one = new Helicopter(100);
one.takeOff();
one.fly();
one.land();
