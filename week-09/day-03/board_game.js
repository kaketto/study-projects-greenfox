'use strict';
window.onload = () => {
  let container = document.querySelector('.container');

  for (let i = 1; i < 7; i++) {
    for (let j = 1; j < 8; j++) {
      let box = document.createElement('div');
      box.classList.add('sunflower');
      box.setAttribute('style', `grid-area: ${i} / ${j} / span 1 / span 1`);
      if (i === 1 && j === 1) {
        let start = document.createElement('p');
        start.innerText = "Start";
        box.appendChild(start);
      } else if (i === 6 && j === 7) {
        let pub = document.createElement('p');
        pub.innerText = "Pub";
        box.appendChild(pub);
      }
      container.appendChild(box);
    }
  };

  let greenBox = document.createElement('div');
  greenBox.classList.add('green');
  greenBox.setAttribute('style', `grid-area: 2 / 2 / span 4 / span 5`)
  container.appendChild(greenBox);

  let bararedBox = document.createElement('div');
  bararedBox.classList.add('barared');
  bararedBox.innerText = "CARDS";
  greenBox.appendChild(bararedBox);
}