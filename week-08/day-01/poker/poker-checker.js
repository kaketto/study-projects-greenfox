'use strict';
const addTwoNumbers = (a, b) => {
  return a + b;
}

let cardRegExp = /([2-9]|[TJQKA])([CDHS])/;
let figureCardRegExp = /([TJQKA])([CDHS])/;
let cardOrder = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
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
    return 0;
  // } else if (figureCardRegExp.test(card1) && figureCardRegExp.test(card2)) {
  //   if (card1[0] === 'A'|| card2[0] === 'T' || (card1[0] === 'K' && (card2[0] === 'Q' || card2[0] === 'J')) || (card1[0] === 'Q'&& card2[0] === 'J')) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // } else if (card1 > card2) {
  //   return 1;
  } else if (cardOrder.indexOf(card1[0]) > cardOrder.indexOf(card2[0])) {
    return 1;
  } else {
    return -1;
  }
}

const sortCards = (cards) => {
  return cards.sort(compareTwoCards);
}

const isAStraight = (cards) => {
  let sortedCards = sortCards(cards);
  for (let i = 0; i < sortedCards.length - 1; i++) {
    if (cardOrder.indexOf(cards[i][0]) + 1 !== cardOrder.indexOf(cards[i + 1][0])) {
      return false;
    }
  }
  return true;
}

const isAFlush = (cards) => {
  return cards.every(elem => elem[1] === cards[0][1])
}

const isAStraightFlush = (cards) => {
  return isAStraight(cards) && isAFlush(cards);
}

module.exports = {addTwoNumbers, isCardValid, isHandValid, compareTwoCards, sortCards, isAStraight, isAFlush,
  isAStraightFlush};