'use strict';

let candyCreatorBtn = document.querySelector('.create-candies');
let numberOfCandies = document.querySelector('.candies');
let timer = 0;
let candies = 0;
let multiplier = 1;
let message = () => {
alert('You won!');
}
const candyCreator = () => {
  if (candies > 1000) {
    message();
    clearInterval(candyGeneratorInterval);
    message = () => {};
  } else {
    candies += 1 * multiplier;
    numberOfCandies.innerHTML = candies;
  };
};

candyCreatorBtn.addEventListener('click', candyCreator);

let buyLollypopBtn = document.querySelector('.buy-lollypops');
let lollypops = document.querySelector('.lollypops');
let lollypopIcon = '🍭';
let speed = document.querySelector('.speed');

let candyGeneratorInterval = () => {
  return setInterval(() => {
    candyCreator();
    timer++;
    speed.innerHTML = Math.floor(numberOfCandies.innerHTML / timer);
  }, 1000);
}

const buyLollypop = () => {
  if (candies >= 10) {
    lollypops.innerHTML += lollypopIcon;
    candies -= 10;
    numberOfCandies.innerHTML = candies;
    let numberOfLollypops = lollypops.innerHTML.length / 2;
    if (numberOfLollypops >= 10) {
      candyGeneratorInterval();
    }
  }
};

buyLollypopBtn.addEventListener('click', buyLollypop);

let candyRainBtn = document.querySelector('.candy-machine');
candyRainBtn.addEventListener('click', () => {
  if (multiplier === 1) {
    multiplier = 10;
  } else {
    multiplier += 10;
  }
});








