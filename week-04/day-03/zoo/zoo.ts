'use strict';
import { Animal } from "./animal";
import { Mammal } from "./mammal";
import { RedPanda } from "./redPanda";
import { Bird } from "./bird";
import { Reptile } from "./reptile";

let redpanda: Mammal = new RedPanda(5);
redpanda.printIntro();

let kiwi: Bird = new Bird('Kiwi', 1, 'Apteryx', 'New Zealand', 77, false);
kiwi.printIntro();

let crocodile: Reptile = new Reptile('Cuban crocodile', 2, 'Crocodylus rhombifer', 'Cuba', 60);
crocodile.printIntro();

let animals: Animal[] = [];
animals.push(redpanda);
animals.push(kiwi);
animals.push(crocodile);

function howDoYouBreed() {
  console.log('How do you breed?');
  animals.forEach(elem => console.log(`A ${elem.getName()} is breeding by ${elem.breed()}.`));
}
howDoYouBreed();