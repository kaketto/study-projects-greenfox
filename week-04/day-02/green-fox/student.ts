'use strict';
import { Person } from "./person";

export class Student extends Person {
  private previousOrganization: string;
  private skippedDays: number;

  // constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life'){
  //   super(name, age, gender);
  //   this.previousOrganization = previousOrganization;
  //   this.skippedDays = 0;
  // }
  constructor(name?: string, age?: number, gender?: string, previousOrganization: string = 'The School of Life'){
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  }

  introduce() {
    console.log(`${this.getIntroText()} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}

