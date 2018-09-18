// 1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent
// 2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
// 3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//  - the timer should fire every 100ms
//  - the timer should stop when there are no more elements left to be colored

'use strict';
function isPrime(num) {
  if (num < 2) {
    return true;
  }
  for (let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }    
  return true;
} 

let section = document.getElementsByTagName('section')[0];
const createDiv = (i) => {
    if (i > 100) {
      clearInterval(buildingDivs);
    } else {
      let newDiv = document.createElement('div');
      newDiv.textContent = i;
      if (isPrime(i)) {
        newDiv.classList.add('prime');
      } else {
        newDiv.classList.add('not-prime');
      }
      section.appendChild(newDiv);
  }
}

let buildingDivs = (j) => {
  return setInterval(() => {
    createDiv(j);
  j++;
  }, 100);
}

buildingDivs(1);

