'use strict';
import { Person } from "./person";

export class Mentor extends Person {
  private level: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate'){
    if (level !== 'junior' && level !=='intermediate' && level !=='senior') {
      throw new Error('Level shall be junior, intermediate, or senior')
    } else {
      super(name, age, gender);
      this.level = level;
    }
  }

  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.');
  }

  introduce() {
    console.log(`${this.getIntroText()} ${this.level} mentor.`);
  }
}
