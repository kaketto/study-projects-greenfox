import { Thing } from "./thing";

class Fleet {
    private things: Thing[];

    constructor() {
        this.things = [];
    }

    add(thing: Thing) {
        this.things.push(thing);
    }

    print() {
        this.things.forEach(item => 
            console.log(`${this.things.indexOf(item) + 1}. [${item.printX()}] ${item.printName()}`));
        
        // for (let i: number = 0; i < this.things.length; i++) {
        //     console.log(`${i + 1}. [${this.things[i].printX()}] ${this.things[i].printName()}`);
        // }
    }
}


export { Fleet };
