// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

'use strict';

function addStarBetweenChars(text: string) {
  if (text.lastIndexOf('*') === text.length - 2) {
    return text;
  } else {
    return text.slice(0, 1) + '*' + addStarBetweenChars(text.slice(1)); 
  }
}

let sampleText: string = 'mukodj kerlek';
console.log(addStarBetweenChars(sampleText));
console.log(sampleText);
