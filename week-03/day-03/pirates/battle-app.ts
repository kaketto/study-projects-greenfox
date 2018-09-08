import { Ship } from "./pirate-ship";

'use strict';

export class BattleApp {
  private shipA: Ship;
  private shipB: Ship;

  constructor(shipA: Ship, shipB: Ship) {
    this.shipA = shipA;
    this.shipB = shipB;
  }

  haveABattle(): void {
    if (this.shipA.battle(this.shipB)) {
      this.shipA.win();
      this.shipB.lose();
    } else {
      this.shipB.win();
      this.shipA.lose();
    }
  }
}
