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
    }
}

export { Fleet };
