import { Comparable } from "./comparable";

'use strict';

export class Thing implements Comparable{
  private name: string;
  private completed: boolean;

  constructor(name: string){
      this.name = name;
      this.completed = false;
  }

  public complete() {
      this.completed = true;
  }

  public printX() {
      if (this.completed) {
          return 'X';
      } else {
          return ' ';
      }
  }

  public printName() {
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
}