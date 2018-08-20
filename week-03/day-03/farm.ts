// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

'use strict';
import { Animal } from "./animal";

class Farm {
  private animals: Animal[];
  private freeSlots: number;

  constructor() {
    this.animals = [];
    this.freeSlots = 10;
  }

  add(animal: Animal) {
    this.animals.push(animal);
  }

  breed() {
    if (this.freeSlots > 0) {
      let newbornAnimal = new Animal();
      this.animals.push(newbornAnimal);
      this.freeSlots--;
    }
  }

  slaughter() {
    let index: number = 0;
    for (let i: number = 0; i < this.animals.length; i++) {
      let leastHungry: Animal = this.animals[index];
      let currentAnimal: Animal = this.animals[i];
      if (currentAnimal.getHungry() < leastHungry.getHungry()) {
        index = i;
      }  
    }
    this.animals.splice(index, 1);
    this.freeSlots++;
    
  }

  print() {
    console.log(this.animals, this.freeSlots);
  }
}

let jungle = new Farm();

let tiger = new Animal;
let lion = new Animal;
let leopard = new Animal;

jungle.add(tiger);
jungle.add(lion);
jungle.add(leopard);

tiger.play();
lion.drink();
leopard.eat();
jungle.print();

jungle.breed();
jungle.print();

jungle.slaughter();
jungle.print();

