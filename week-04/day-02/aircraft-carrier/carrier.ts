'use strict';
import { Aircraft } from "./aircraft";

export class Carrier {
  private name: string;
  private aircrafts: Aircraft[];
  private ammoStoreCarrier: number;
  private healthPoint: number;

  constructor(name: string, ammoStoreCarrier: number, healthPoint: number) {
    this.name = name;
    this.aircrafts = [];
    this.ammoStoreCarrier = ammoStoreCarrier;
    this.healthPoint = healthPoint;
  }

  add(aircraft: Aircraft): void {
    this.aircrafts.push(aircraft);
  }

  fill() {
    if (this.ammoStoreCarrier === 0) {
      throw new Error('Ammo store is empty');
    } else {
      let remainingAmmo: number;
      let nonPriorityAircrafts: Aircraft[] = this.aircrafts.filter(elem => {return !elem.isPriority() });
      let priorityFirstAllAircrafts: Aircraft[] = this.aircrafts.filter(elem => {return elem.isPriority() });
      nonPriorityAircrafts.forEach(elem => priorityFirstAllAircrafts.push(elem));
      while (this.ammoStoreCarrier > 0 && priorityFirstAllAircrafts.some(elem => elem.isAmmoNeeded())) {
        priorityFirstAllAircrafts.forEach(elem => {
          remainingAmmo = elem.refill(this.ammoStoreCarrier);
          this.ammoStoreCarrier = remainingAmmo;
        });
      }
    }
  }

  fight(carrier: Carrier): string {
    let totalDamage: number = 0;
    this.aircrafts.forEach(elem => totalDamage += elem.fight());
    carrier.healthPoint -= totalDamage;
    if (carrier.healthPoint < 0) {
      return `${this.name} attacks ${carrier.name}: ${carrier.name}'s carrier is dead, baby.`
    } else {
      return `${this.name} attacks ${carrier.name}: ${carrier.name}'s health point decreased to ${carrier.healthPoint}`;
    }
  }

  getStatus(): string {
    if (this.healthPoint <= 0) {
      return `It's dead Jim :(`;
    } else {
      let totalPotentialDamage: number = 0;
      this.aircrafts.forEach(elem => totalPotentialDamage += elem.getAllDamage());
      return `${this.name} HP: ${this.healthPoint}, Number of aircrafts: ${this.aircrafts.length}, Ammo storage: ${this.ammoStoreCarrier}, Total damage: ${totalPotentialDamage} 
      Aircrafts: ${this.aircrafts.map(elem => '\n' + elem.getStatus())}`;
    }
  }
}
