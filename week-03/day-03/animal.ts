// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animal {
  hunger: number;
  thirst: number;

  constructor (hunger: number = 50, thirst: number = 50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }

  eat(food: string) {
    return this.hunger--;
  }

  drink(drink: string) {
    return this.thirst--;
  }

  play(otherAnimal: string) {
    return this.hunger++ && this.thirst++;
  }
}

let tiger = new Animal;
let lion = new Animal;
console.log(tiger);
console.log(lion);

tiger.play('leopard');
lion.eat('antilop');
console.log(tiger);
console.log(lion);

