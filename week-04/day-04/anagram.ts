'use strict';

export function isAnagram (string1:string, string2:string): boolean {
  let array1: string[] = string1.split('').sort();
  let array2: string[] = string2.split('').sort();
  let check: boolean[] = [];
  for (let i: number = 0; i < array1.length; i++) {
    check.push(array1[i] === array2[i]);
  }
  return check.every(value => value === true);
}

console.log(isAnagram('salesmen', 'nameless'));
