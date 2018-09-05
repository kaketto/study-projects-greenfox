'use strict';
import { Flower } from "./flower";
import { Tree } from "./tree";
import { Garden } from "./garden";

let myGarden: Garden = new Garden();
myGarden.addPlant(new Flower('yellow'));
myGarden.addPlant(new Flower('blue'));
myGarden.addPlant(new Tree('purple'));
myGarden.addPlant(new Tree('orange'));

myGarden.print();

myGarden.watering(40);
myGarden.print();

myGarden.watering(70);
myGarden.print();


