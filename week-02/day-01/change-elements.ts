
// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

'use strict';

let numList: number[] = [1, 2, 3, 8, 5, 6];
let newList: number[] = numList.map(function (item: number) {
    return item / 2;
});

console.log(newList[3]);

