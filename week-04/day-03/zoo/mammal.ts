'use strict';
import { Animal } from "./animal";

export abstract class Mammal extends Animal {
  protected timeOfGestation: number;

  eat(): void {
    this.isHungry = false;
  }
  
  getName(): string {
    return `${this.name} alias ${this.latinName}`; 
  }

  breed(): string {
    return `giving birth after ${this.timeOfGestation} days of gestation`;
  }

  play():void {
    this.isHungry = true;
  }

  winterSleep?():void {
    console.log('See you next spring');
  }
}