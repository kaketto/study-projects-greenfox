// Given a string, compute recursively a new string where all the 'x' chars have been removed.

'use strict';
export {};

function removeX(text: string){
  if (text.indexOf('x') === -1) {
    return text;
  } else {
    return removeX(text.replace('x', ''));
  }
}

let text1: string = 'valamix tutix';
console.log(removeX(text1));