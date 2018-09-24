'use strict';
const addTwoNumbers = (a, b) => {
  return a + b;
}

let cardRegExp = /([2-9]|[TJQKA])([CDHS])/;
let figureCardRegExp = /([TJQKA])([CDHS])/;
const isCardValid = (card) => {
  return cardRegExp.test(card);
}

const isDuplicate = (cards) => {
  for (let i = 0; i < cards.length; i++) {
    if (cards.indexOf(cards[i]) !== i) {
      return true;
    } 
  }
  return false;
}

const isHandValid = (cards) => {
  return cards.every(elem => isCardValid(elem)) && !isDuplicate(cards);
}

const compareTwoCards = (card1, card2) => {
  if (card1[0] === card2[0]) {
    return 'equal';
  } else if (figureCardRegExp.test(card1) && figureCardRegExp.test(card2)) {
    if (card1[0] === 'A'|| card2[0] === 'T' || (card1[0] === 'K' && (card2[0] === 'Q' || card2[0] === 'J')) || (card1[0] === 'Q'&& card2[0] === 'J')) {
      return card1;
    } else {
      return card2;
    }
  } else if (card1 > card2) {
    return card1;
  } else {
    return card2;
  }
}

module.exports = {addTwoNumbers, isCardValid, isHandValid, compareTwoCards};