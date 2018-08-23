'use strict';

export function CountLetters (text: string) {
  let dictionary: {} = {};
  let arrayOfLetters: string[] = text.split('').sort();
  while (arrayOfLetters[0] === ' ') {
    arrayOfLetters.splice(0, 1);
  }
  for (let i: number = 0; i < arrayOfLetters.length; i++){
    dictionary[arrayOfLetters[i]] = 0;
  }
  arrayOfLetters.forEach(elem => dictionary[elem]++);
  return dictionary;
}
