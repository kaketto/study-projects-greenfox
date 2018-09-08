import { test } from "tape";
import { convertNumberToText } from "./number-converter";

test(t=> {
  let dollarInNumbers: number = 745;
  let dollarInLetters: string = 'seven hundred and fourty five dollars';
  let result = convertNumberToText(dollarInNumbers);
  t.equal(result, dollarInLetters);
  t.end();
});

test(t=> {
  let dollarInNumbers: number = 744;
  let dollarInLetters: string = 'seven hundred and fourty four dollars';
  let result = convertNumberToText(dollarInNumbers);
  t.equal(result, dollarInLetters);
  t.end();
});

test(t=> {
  let dollarInNumbers: number = 714;
  let dollarInLetters: string = 'seven hundred fourteen dollars';
  let result = convertNumberToText(dollarInNumbers);
  t.equal(result, dollarInLetters);
  t.end();
});

