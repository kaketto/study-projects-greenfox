import { Pirate } from "./pirates";
import { BattleApp } from "./battle-app";

'use strict';

// let Braveheart = new Pirate();
// let LazyEye = new Pirate();
// let TheFool = new Pirate();
// let Fishlips = new Pirate();
// let GoldenTeeth = new Pirate();

// Braveheart.howsItGoingMate(LazyEye, true);
// console.log(LazyEye);
// console.log(Braveheart);

// TheFool.brawl(Fishlips);
// GoldenTeeth.howsItGoingMate(TheFool, true);
// TheFool.drinkSomeRum();
// console.log(TheFool);
// console.log(Fishlips);

let firstBattle = new BattleApp();
firstBattle.printInfo();
firstBattle.haveABattle();
firstBattle.printInfo();
