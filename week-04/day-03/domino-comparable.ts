import { Comparable } from "./comparable";

'use strict';

export class Domino implements Comparable {
  values: number[];
  constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
  }
  compareTo(other: Domino): number {
    if (this.values[0] > other.values[0] || (this.values[0] === other.values[0] && this.values[1] > other.values[1])) {
      return 1;
    } else if (this.values[0] < other.values[0] || (this.values[0] === other.values[0] && this.values[1] < other.values[1])) {
      return -1;
    } else if (this.values === other.values) {
      return 0;
    }
  }
}

