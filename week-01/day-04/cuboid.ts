'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let Length: number = 1.4;
let Width: number = 2.5;
let Height: number = 3.7;
console.log(`Surface Area: ${Math.floor(((Length * Width) + (Length * Height) + (Width * Height)) * 2 * 100) / 100}`);
console.log(`Volume: ${Math.floor(Length * Width * Height * 100) / 100}`);
