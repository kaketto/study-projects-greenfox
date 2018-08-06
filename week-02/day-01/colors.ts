// -  Create a two dimensional list
//    which can contain the different shades of specified colors
// -  In `colors[0]` store the shades of green:
//    `"lime", "forest green", "olive", "pale green", "spring green"`
// -  In `colors[1]` store the shades of red:
//    `"orange red", "red", "tomato"`
// -  In `colors[2]` store the shades of pink:
//    `"orchid", "violet", "pink", "hot pink"`
'use strict';

let colors: string [][] = [['lime', 'forest green', 'olive', 'pale green', 'spring green'], 
    ['orange red', 'red', 'tomato'], ['orchid', 'violet', 'pink', 'hot pink']];


console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

//first index refers to initial array, second index refers to the element in that array. eg below print: spring green, orange red, tomato, hot pink
console.log(colors[0][4]);
console.log(colors[1][0]);
console.log(colors[1][2]);
console.log(colors[2][3]);

console.log(colors);


