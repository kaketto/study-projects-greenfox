import { Pirate } from "./pirates";

'use strict';

export class Ship {
  private name: string;
  private crew: Pirate[];
  private captain: Pirate;

  constructor(name: string) {
    this.name = name;
    this.crew = [];
    this.fillShip();
  }

  fillShip(): void {
    for (let i: number = 0; i < Math.ceil(Math.random()* 10); i++) {
      this.crew.push(new Pirate());
    }
    this.captain = new Pirate();
    this.captain.drinkSomeRum();
  }

  printInfo(): void {
    console.log(`${this.name}:
    Its captain had ${this.captain.getRumLevel()} rum so far and he's ${this.captain.isHeAlive ? (!this.captain.isHeSleeping ? 'passed out' : 'awake') : 'dead'}.
    There are ${this.crew.length} pirates on board.`);
  }

  battle(otherShip: Ship): boolean {
    let scoreThisShip: number = this.crew.length - this.captain.getRumLevel();
    let scoreOtherShip: number = otherShip.crew.length - otherShip.captain.getRumLevel();
    if (scoreThisShip > scoreOtherShip) {
      return true;
    } else {
      return false;
    }
  }

  win(): void {
    console.log(`${this.name} won the battle, let's get party!`);
    this.captain.drinkSomeRum();
    this.crew.forEach(elem => elem.drinkSomeRum());
  }

  lose(): void {
    let numberOfLoss: number = Math.ceil(Math.random() * this.crew.length);
    this.crew.splice(0, numberOfLoss);
    if (this.destroyed()) {
      console.log(`${this.name} got destroyed`);
    } else {
    console.log(`${this.name} lost the battle and ${numberOfLoss} pirates.`);
    }
  }

  destroyed(): boolean {
    if (this.crew = []) {
      return true;
    } else {
      return false;
    }  
  }
}

