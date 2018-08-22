'use strict';
import { ElectricGuitar } from "./instrument-package/electricGuitar";
import { BassGuitar } from "./instrument-package/bassGuitar";
import { Violin } from "./instrument-package/violin";

let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();
