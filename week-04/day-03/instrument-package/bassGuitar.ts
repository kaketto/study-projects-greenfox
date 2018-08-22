'use strict';
import{ StringedInstrument } from "./stringed-instrument";

export class BassGuitar extends StringedInstrument {

  constructor(numberOfStrings: number = 4) {
    super();
    this.name = 'Bass Guitar';
    this.numberOfStrings = numberOfStrings;
  }

  sound(): string {
    return 'Duum-duum-duum';
  }

  play(): void {
    super.play();   
  }
}
