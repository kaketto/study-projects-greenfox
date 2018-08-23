'use strict';

export class Sum {
  private listOfIntegers: any[];

  constructor(listOfIntegers: any[]) {
    // if (listOfIntegers === null) {
    //   throw new Error('Add a list of integers')
    // } else {
    this.listOfIntegers = listOfIntegers;
    // }
  }

  sum() {
    let sum: number = 0;
    if (this.listOfIntegers.some(item => typeof(item) !== 'number')) {
      return undefined;
    } else {
    this.listOfIntegers.forEach(elem => sum += elem);
    return sum;
    }
  }
}


