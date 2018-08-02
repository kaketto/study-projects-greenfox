'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let secondsInAMinute: number = 60;
let minutesInAnHour: number = 60;
let hoursInADay: number = 24;
let secondsOfADay: number = secondsInAMinute * minutesInAnHour * hoursInADay;
let pastSeconds: number = currentHours * minutesInAnHour * secondsInAMinute + currentMinutes * secondsInAMinute + currentSeconds
console.log(secondsOfADay - pastSeconds);
