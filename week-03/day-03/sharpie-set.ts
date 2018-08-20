// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

'use strict';

import { Sharpie } from "./sharpie";

class SharpieSet {
  private sharpies: Sharpie[];

  constructor() {
    this.sharpies = [];
  }

  add(newSharpie: Sharpie) {
    this.sharpies.push(newSharpie);
  }

  countUsable() {
    let sum: number = 0;
    this.sharpies.forEach(function(item) {
      if (item.inkAmount > 0) {
        sum++;
      }});
    return sum;
  }

  removeTrash() {
    for (let i: number = 0; i < this.sharpies.length; i++) {
      if (this.sharpies[i].inkAmount == 0) {
        this.sharpies.splice(i, 1);
        i--;
      }
    }
  }
}

let sharpie1 = new Sharpie('yellow', 20);
let sharpie2 = new Sharpie('red', 25);
let sharpie3 = new Sharpie('green', 15);
let sharpie4 = new Sharpie('blue', 20);
let sharpie5 = new Sharpie('pink', 15);
let sharpie6 = new Sharpie('purple', 20);

let MySharpies = new SharpieSet;
MySharpies.add(sharpie1);
MySharpies.add(sharpie2);
MySharpies.add(sharpie3);
MySharpies.add(sharpie4);
MySharpies.add(sharpie5);
MySharpies.add(sharpie6);

console.log(MySharpies);

sharpie2.inkAmount = 0;
sharpie3.inkAmount = 0;
sharpie4.inkAmount = 0;
console.log(MySharpies);

MySharpies.countUsable();
console.log(MySharpies.countUsable());

MySharpies.removeTrash();
console.log(MySharpies);
