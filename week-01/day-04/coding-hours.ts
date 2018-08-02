'use strict'

let dailyCodingHours: number = 6;
let numberOfSemesterWeeks: number = 17;
let workdays: number = 5;

// Hours spent with coding in a semester by an attendee, if the attendee only codes on workdays.
let semesterCodingHours: number = dailyCodingHours * workdays * numberOfSemesterWeeks;
console.log(semesterCodingHours);

// Percentage of the coding hours in the semester if the average work hours weekly is 52
let weeklyAverageHours: number = 52;
console.log(Math.floor(semesterCodingHours / (weeklyAverageHours * numberOfSemesterWeeks)*100) + '%');