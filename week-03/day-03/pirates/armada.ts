import { Ship } from "./pirate-ship";
import { BattleApp } from "./battle-app";

'use strict';

export class Armada {
  private name: string;
  private shipnames: string[];
  private armada: Ship[];

  constructor(name: string, shipnames: string[]) {
    this.name = name;
    this.shipnames = shipnames;
    this.armada = [];
  }

  fillArmada(): void {
    for (let i: number = 0; i < Math.ceil(Math.random()* 4) + 1; i++) {
      this.armada.push(new Ship(this.shipnames[i]));
    }
    console.log(`The armada of ${this.name} consists of ${this.armada.length} ships.`);
  }

  war(other: Armada): boolean {
    let battle: BattleApp;
    while (this.armada.length > 0 && other.armada.length > 0) { 
      battle = new BattleApp(this.armada[0], other.armada[0]);
      console.log(`The battle started between ${this.armada[0].getName()} and ${other.armada[0].getName()}:`);
      while (this.armada[0].destroyed() === false && other.armada[0].destroyed() === false) {
        battle.haveABattle();
      }
      if (this.armada[0].destroyed()) {
        this.armada.splice(0, 1);
      } else {
        other.armada.splice(0, 1);
      }
    }
    if (this.armada.length > 0) {
      console.log(`${this.name} have won the pirates war of the century and get full control over the whole Caribbean!`);
      return true;
    } else {
      console.log(`${other.name} have won the pirates war of the century and get full control over the whole Caribbean!`);
      return false;
    }
  }
}
