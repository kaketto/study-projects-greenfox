// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function addNumbers (n: number): number {
  // let sum:number = 0;
  // for (let i:number = 0; i <= n; i++) {
  //   sum += i;
  // }
  // return sum;
  if (n === 1) {
    return 1;
  } else {
    return n + addNumbers(n-1);
  }
}

let answer: number;
answer = addNumbers(10);
console.log(answer);

