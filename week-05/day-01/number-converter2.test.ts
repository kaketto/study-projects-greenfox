import { test } from "tape";
import { convertNumberToText } from "./number-converter2";

test(t=> {
  let dollarInNumbers: number = 1;
  let dollarInLetters: string = 'one';
  let result = convertNumberToText(dollarInNumbers);
  t.equal(result, dollarInLetters);
  t.end();
});

test(t=> {
  let dollarInNumbers: number = 2;
  let dollarInLetters: string = 'two';
  let result = convertNumberToText(dollarInNumbers);
  t.equal(result, dollarInLetters);
  t.end();
});

test(t=> {
  let dollarInNumbers: number = 3;
  let dollarInLetters: string = 'three';
  let result = convertNumberToText(dollarInNumbers);
  t.equal(result, dollarInLetters);
  t.end();
});

test(t=> {
  let dollarInNumbers: number = 4;
  let dollarInLetters: string = 'four';
  let result = convertNumberToText(dollarInNumbers);
  t.equal(result, dollarInLetters);
  t.end();
});

test(t=> {
  let dollarInNumbers: number = 10;
  let dollarInLetters: string = 'ten';
  let result = convertNumberToText(dollarInNumbers);
  t.equal(result, dollarInLetters);
  t.end();
});

test(t=> {
  let dollarInNumbers: number = 21;
  let dollarInLetters: string = 'twentyone';
  let result = convertNumberToText(dollarInNumbers);
  t.equal(result, dollarInLetters);
  t.end();
});