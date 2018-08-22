'use strict';
import { Animal } from "./animal";

export abstract class LayingEgg extends Animal {
  protected incubationPeriod: number;

  eat(): void {
    this.isHungry = false;
  }
  
  getName(): string {
    return `${this.name} (${this.latinName})`; 
  }

  breed(): string {
    return `laying eggs, followed by ${this.incubationPeriod} days of incubation`;
  }
}