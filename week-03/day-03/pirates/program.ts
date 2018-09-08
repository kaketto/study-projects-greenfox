'use strict';
import { Armada } from "./armada";

let shipnames1: string[] = ['The Right Eye', 'The Left Eye', 'The Blinder of Blinds', 'The Monocle', 'The Broken Glasses'];
let shipnames2: string[] = ['The Wood Leg', 'The Lame', 'The Runner', 'The Snake', 'The Hobble'];

let theoneeyed: Armada = new Armada('The One-Eyed ones', shipnames1);
theoneeyed.fillArmada();
let theoneleg: Armada = new Armada('The One-Leg ones', shipnames2);
theoneleg.fillArmada();
console.log(`LET THE WAR BEGIN`);
theoneeyed.war(theoneleg);

