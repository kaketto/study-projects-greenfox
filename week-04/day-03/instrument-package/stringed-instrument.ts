'use strict';
import { Instrument } from "./instrument";

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;

  abstract sound(): string;

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument, that goes ${this.sound()}`);
  }
}
