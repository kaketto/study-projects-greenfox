'use strict';
window.onload = () => {
  let container = document.querySelector('.container');

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let box = document.createElement('div');
      box.classList.add('bluebell');
      box.setAttribute('style', `grid-area: ${i} / ${j} / span 1 / span 1`)
      container.appendChild(box);
    }
  };

  let fuchsiaBox = document.createElement('div');
  fuchsiaBox.classList.add('fuchsia');
  fuchsiaBox.setAttribute('style', `grid-area: 1 / 2 / span 2 / span 2`)
  container.appendChild(fuchsiaBox);

  let clearChillBox = document.createElement('div');
  clearChillBox.classList.add('clear-chill');
  fuchsiaBox.appendChild(clearChillBox);
}