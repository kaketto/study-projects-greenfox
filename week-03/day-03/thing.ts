'use strict';

export class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string){
      this.name = name;
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
}