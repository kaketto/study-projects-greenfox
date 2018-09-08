'use strict';

export class Pirate {
  private consumedRum: number;
  private isSleeping: boolean;
  private isAlive: boolean;
  private static Parrot: string;

  constructor(consumedRum: number = 0, isSleeping: boolean = false, isAlive: boolean = true) {
    this.consumedRum = consumedRum;
    this.isSleeping = isSleeping;
    this.isAlive = isAlive;
    Pirate.Parrot = 'Me Parrot';
  }

  drinkSomeRum(): void {
    if (this.isAlive) {
    this.consumedRum += Math.ceil(Math.random() * 5);
    this.consumedRum >= 10 ? this.isSleeping = true : this.isSleeping = false;
    } else {
      console.log('No more drink for the dead');      
    }
  }

  howsItGoingMate(pirate: Pirate, drink: boolean): void {
    if (pirate.isAlive === false) {
      console.log('...\(The dead doesn\'t talk\)');  
    } else if (drink) {
      for (let i: number = 0; i < Math.floor(Math.random() * 5); i++) {
        console.log('Pour me anudder!');
        pirate.drinkSomeRum();
        if (pirate.consumedRum >= 10) {
          pirate.isSleeping = true;
          break;
        }
      }
    } else {
      console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
      pirate.isSleeping = true;
    }
  }

  die(){
    this.isAlive = false;
  }

  brawl(pirate1: Pirate): void {
    let destiny: number = Math.floor(Math.random()* 3);
    if (destiny === 0) {
      pirate1.die();
    } else if (destiny === 1) {
      this.die();
    } else {
      pirate1.die()
      this.die();
    }
  }

  getRumLevel(): number {
    return this.consumedRum;
  }

  isHeAlive(): boolean {
    return this.isAlive;
  }

  isHeSleeping(): boolean {
    return this.isSleeping;
  }
}


