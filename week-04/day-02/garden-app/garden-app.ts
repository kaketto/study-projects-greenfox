'use strict';
import { Flower } from "./flower";
import { Tree } from "./tree";
import { Garden } from "./garden";

let myGarden: Garden = new Garden();
myGarden.addFlower(new Flower('yellow'));
myGarden.addFlower(new Flower('blue'));
myGarden.addTree(new Tree('purple'));
myGarden.addTree(new Tree('orange'));

myGarden.print();

myGarden.watering(40);
myGarden.print();

myGarden.watering(70);
myGarden.print();


