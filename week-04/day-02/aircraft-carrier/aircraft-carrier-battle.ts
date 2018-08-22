'use strict';
import { F16 } from "./f16";
import { F35 } from "./f35";
import { Carrier } from "./carrier";

let USA = new Carrier('USA', 100, 5000);
USA.add(new F35());
USA.add(new F16());
USA.add(new F35());
USA.add(new F35());
USA.add(new F16());
USA.fill();

let USSR = new Carrier('USSR', 100, 4000);
USSR.add(new F16());
USSR.add(new F35());
USSR.add(new F35());
USSR.add(new F16());
USSR.add(new F16());
USSR.add(new F16());
USSR.fill();

console.log(USA.fight(USSR));
console.log(USSR.fight(USA));
USSR.fill();
console.log(USSR.fight(USA));
USA.fill();
console.log(USA.fight(USSR));
console.log(USA.getStatus());
console.log(USSR.getStatus());





