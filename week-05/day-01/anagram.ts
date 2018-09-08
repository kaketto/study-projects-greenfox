import { isDeepStrictEqual } from "util";

export function isAnagram(string1, string2): boolean {
  let letters1: string[] = string1.split('').sort();
  let letters2: string[] = string2.split('').sort();
  let results: boolean[] = [];
  for (let i: number = 0; i < letters1.length; i++) {
    results.push(letters1[i] === letters2[i]);
  }  
  return results.every(elem => elem === true);
}
console.log(isAnagram('sas', 'ssd'));
