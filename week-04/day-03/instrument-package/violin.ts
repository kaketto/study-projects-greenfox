'use strict';
import{ StringedInstrument } from "./stringed-instrument";

export class Violin extends StringedInstrument {

  constructor(numberOfStrings: number = 4) {
    super();
    this.name = 'Violin';
    this.numberOfStrings = numberOfStrings;
  }

  sound(): string {
    return 'Screech';
  }

  play(): void {
    super.play();   
  }
}
