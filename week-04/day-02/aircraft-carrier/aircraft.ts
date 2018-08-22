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
    let remainingAmmo: number;
    let ammoNeed: number = this.ammoMax - this.ammoStore;
    if (numberOfAmmo > ammoNeed) {
      this.ammoStore = this.ammoMax;
      remainingAmmo =  numberOfAmmo - ammoNeed;
      return remainingAmmo;
    } else { 
      this.ammoStore += numberOfAmmo;
      return 0;
    }
  }

  getType(): string {
    return this.type;
  }

  getStatus(): string {
    return `Type ${this.type}, Ammo: ${this.ammoStore}, Base Damage: ${this.baseDamage}, All Damage: ${this.getAllDamage()}`;
  }

  getAllDamage(): number {
    return this.ammoStore * this.baseDamage;
  }

  isPriority() {
  }

  isAmmoNeeded(): boolean {
    if (this.ammoStore < this.ammoMax) {
      return true;
    }
  }
}
