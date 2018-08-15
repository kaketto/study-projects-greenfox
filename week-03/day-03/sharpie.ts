// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

'use strict';

class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor (color: string, width: number, inkAmount: number = 100) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
  }

  use() {
    return this.inkAmount--;
  }
}

let sharpie1 = new Sharpie('black', 20);
let sharpie2 = new Sharpie('red', 25);
console.log(sharpie1);
console.log(sharpie2);

sharpie2.use();
console.log(sharpie2);


