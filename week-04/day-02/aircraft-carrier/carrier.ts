'use strict';
import { Aircraft } from "./aircraft";
import { F16 } from "./f16";
import { F35 } from "./f35";

export class Carrier {
  aircrafts: Aircraft[];
  ammoStoreCarrier: number;
  healthPoint: number;

  constructor(ammoStoreCarrier: number, healthPoint: number) {
    this.aircrafts = [];
    this.ammoStoreCarrier = ammoStoreCarrier;
    this.healthPoint = healthPoint;
  }

  add(aircraft: Aircraft): void {
    this.aircrafts.push(aircraft);
  }

  fill() {
    if (this.ammoStoreCarrier < 1) {
      throw new Error('Ammo store is empty');
    } else {
      this.aircrafts.forEach(element => {
        if (element.isPriority()) {
          this.ammoStoreCarrier = element.refill(this.ammoStoreCarrier);
        }
      });
    }
  }

  fight(carrier: Carrier): string {
    let totalDamage: number = 0;
    this.aircrafts.forEach(elem => totalDamage += elem.fight());
    carrier.healthPoint -= totalDamage;
    return `${carrier}'s health point decreased to ${carrier.healthPoint}`;
  }

  getStatus(): string {
    if (this.healthPoint <= 0) {
      return 'It\'s dead Jim :(';
    } else {
      let totalPotentialDamage: number = 0;
      this.aircrafts.forEach(elem => totalPotentialDamage += elem.getAllDamage());
      return `HP: ${this.healthPoint}, Number of aircrafts: ${this.aircrafts.length}, Ammo storage: ${this.ammoStoreCarrier}, Total damage: ${totalPotentialDamage} 
      Aircrafts: ${this.aircrafts.map(elem => '\n' + elem.getStatus())}`;
    }
  }
}
