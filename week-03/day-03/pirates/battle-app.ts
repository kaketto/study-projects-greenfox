import { Ship } from "./pirate-ship";

'use strict';

export class BattleApp {
  private shipA: Ship;
  private shipB: Ship;

  constructor() {
    this.shipA = new Ship('The Fortune');
    this.shipB = new Ship('The Flying Storm');
  }

  haveABattle() {
    if (this.shipA.battle(this.shipB)) {
      this.shipA.win();
      this.shipB.lose();
    } else{
      this.shipB.win();
      this.shipA.lose();
    }
  }

  printInfo() {
    this.shipA.printInfo();
    this.shipB.printInfo();
  }
}
