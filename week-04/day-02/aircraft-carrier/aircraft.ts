'use strict';

export class Aircraft {
  protected type: string;
  protected ammoMax: number;
  protected ammoStore: number;
  protected baseDamage: number;

  constructor(type: string, ammoMax: number, baseDamage: number) {
    this.type = type;
    this.ammoMax = ammoMax;
    this.baseDamage = baseDamage;
    this.ammoStore = 0;
  }

  fight(): number {
    let damage: number = this.baseDamage * this.ammoStore;
    this.ammoStore = 0;
    return damage;
  }

  refill(numberOfAmmo: number): number {
    if (numberOfAmmo > this.ammoMax - this.ammoStore) {
      this.ammoStore = this.ammoMax;
      return numberOfAmmo - (this.ammoMax - this.ammoStore);
    } else { 
      this.ammoStore += numberOfAmmo;
      return 0;
    }
  }

  getType(): string {
    return this.type;
  }

  getStatus(): string {
    return `Type ${this.type}, Ammo: ${this.ammoStore}, Base Damage: ${this.baseDamage}, All Damage: ${this.ammoStore * this.baseDamage}`;
  }

  isPriority() {
  }
}
