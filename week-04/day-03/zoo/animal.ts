'use strict';

export abstract class Animal {
  protected name: string;
  protected latinName: string;
  protected age: number;
  protected isHungry: boolean;
  protected isEndangered: boolean;
  protected nativeIn: string;

  abstract getName(): void;
  abstract breed(): void;
  abstract eat(): void;

  printIntro(): void {
    console.log(`I am a ${this.age}-year old ${this.name}, native in ${this.nativeIn}`);
  }
}
