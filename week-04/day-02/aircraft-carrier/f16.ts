'use strict';
import { Aircraft } from "./aircraft";

export class F16 extends Aircraft {
  constructor(type?: string, ammoMax?: number, baseDamage?: number) {
    super(type, ammoMax, baseDamage);
    this.type = 'F16';
    this.ammoMax = 8;
    this.baseDamage = 30;
  }

  isPriority(): boolean {
    return false;
  }
}
