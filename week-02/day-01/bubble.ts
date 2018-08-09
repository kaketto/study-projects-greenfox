//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending
//  Example:
// console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
// console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]

'use strict';

function sortNumber(a, b) {
  return a - b;
}

function bubble (arr: number[]) {
    return arr.sort(sortNumber);
}

console.log(bubble([34, 12, 24, 9, 5]));

function advancedBubble (arr: number[], descending: boolean) {
    if (descending === true) {
        arr.sort(sortNumber);
        return arr.reverse();
    } else {
        return arr.sort(sortNumber);
    }
}

console.log(advancedBubble([34, 12, 24, 9, 5], true));
console.log(advancedBubble([34, 12, 24, 9, 5], false));
console.log(advancedBubble([34, 1, 12, 123, 24, 9, 5], true));
console.log(advancedBubble([34, 1, 12, 123, 24, 9, 5], false));

