'use strict';

class Pirate {

  private needForRum: number;
  private isSleeping: boolean;
  private isAlive: boolean;
  private static Parrot: string;

  constructor(needForRum: number = 10, isSleeping: boolean = false, isAlive: boolean = true) {
    this.needForRum = needForRum;
    this.isSleeping = isSleeping;
    this.isAlive = isAlive;
    Pirate.Parrot = 'IAmParrot';
  }

  drinkSomeRum() {
    if (this.isAlive) {
    this.needForRum -= 2;
    } else {
      console.log('No more drink for the dead');      
    }
  }

  howsItGoingMate(pirate: Pirate, drink: boolean) {
    if (pirate.isAlive === false) {
      console.log('...\(The dead doesn\'t talk\)');  
    } else if (drink) {
      for (let i: number = 0; i < Math.floor(Math.random() * 4); i++) {
        console.log('Pour me anudder!');
        pirate.drinkSomeRum();
        if (pirate.needForRum === 0) {
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

  brawl(pirate1: Pirate) {
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
}

let Braveheart = new Pirate();
let LazyEye = new Pirate();
let TheFool = new Pirate();
let Fishlips = new Pirate();
let GoldenTeeth = new Pirate();

Braveheart.howsItGoingMate(LazyEye, true);
console.log(LazyEye);
console.log(Braveheart);

TheFool.brawl(Fishlips);
GoldenTeeth.howsItGoingMate(TheFool, true);
TheFool.drinkSomeRum();
console.log(TheFool);
console.log(Fishlips);



