// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.
'use strict';

function changeXtoY(text: string){
  if (text.indexOf('x') === -1) {
    return text;
  } else {
    return changeXtoY(text.replace('x', 'y'));
  }
}

let text1: string = 'maximalis extazis';
let text2: string = 'txukanxo';
console.log(changeXtoY(text1));
console.log(changeXtoY(text2));

