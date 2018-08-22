'use strict';
import{ StringedInstrument } from "./stringed-instrument";

export class ElectricGuitar extends StringedInstrument {

  constructor(numberOfStrings: number = 6) {
    super();
    this.name = 'Electric Guitar';
    this.numberOfStrings = numberOfStrings;
  }

  sound(): string {
    return 'Twang';
  }

  play(): void {
    super.play();   
  }
}

