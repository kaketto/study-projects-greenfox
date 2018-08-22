'use strict';

import { Thing } from "./thing-comparable";

export class Fleet {
    private things: Thing[];

    constructor() {
        this.things = [];
    }

    add(thing: Thing) {
        this.things.push(thing);
    }

    print() {
      this.things.sort(function (a: Thing, b: Thing): number {return a.compareTo(b)});
      this.things.forEach(item => 
      console.log(`${this.things.indexOf(item) + 1}. [${item.printX()}] ${item.printName()}`));
    }
}
