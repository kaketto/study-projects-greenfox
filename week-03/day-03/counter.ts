// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

'use strict';
export {};

class Counter {
  private integer: number;
  private origInteger: number;

  constructor (integer: number = 0) {
    this.integer = integer
    this.origInteger = this.integer;
  }

  add(number?: number) {
    if (number === undefined){
      this.integer++;
    } else {
      this.integer += number;
    }
  }
  
  get() {
    let currentNUmber: string = this.integer.toString();
    return currentNUmber;
  }
  
  reset() {
    this.integer = this.origInteger;
  }
}

let counting = new Counter(10);

counting.add();
counting.add(4);
console.log(counting.get());

counting.reset();
console.log(counting.get());

