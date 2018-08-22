'use strict';

import { Thing } from "./thing-comparable";
import { Fleet } from "./fleet-comparable";

let fleet = new Fleet();

let milk = new Thing('Get milk');
let obstacles = new Thing('Remove the obstacles');
let standUP = new Thing('Stand up');
let lunch = new Thing('Eat lunch');

fleet.add(standUP);
fleet.add(obstacles);
fleet.add(milk);
fleet.add(lunch);
milk.complete();
lunch.complete();

fleet.print();

for (let thing of fleet.getThingsArray()) {
  thing.printAllFields();
}




