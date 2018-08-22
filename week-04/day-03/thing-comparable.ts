import { Comparable } from "./comparable";
import { Printable } from "./printable";

'use strict';

export class Thing implements Comparable, Printable{
  private name: string;
  private completed: boolean;

  constructor(name: string){
      this.name = name;
      this.completed = false;
  }

  complete() {
      this.completed = true;
  }

  printX() {
      if (this.completed) {
          return 'X';
      } else {
          return ' ';
      }
  }

  printName() {
      return this.name;
  }

  compareTo(other: Thing): number {
    if (this.completed > other.completed || (this.completed === other.completed  && this.name > other.name)) {
      return 1;
    } else if (this.completed < other.completed || (this.completed === other.completed  && this.name < other.name)) {
      return -1;
    } else if (this === other) {
      return 0;
    }
  }

  printAllFields(): void {
      console.log(`task: ${this.name}, completed: ${this.completed}`);
  }
}
