'use strict';
import { Aircraft } from "./aircraft";

export class F35 extends Aircraft {
  constructor(type?: string, ammoMax?: number, baseDamage?: number) {
    super(type, ammoMax, baseDamage);
    this.type = 'F35';
    this.ammoMax = 12;
    this.baseDamage = 50;
  }

  isPriority(): boolean {
    return true;
  }
}
