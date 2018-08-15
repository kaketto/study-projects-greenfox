'use strict';

import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

//print(dominoes);
function orderIntoSnake(dominoes: Domino[]) {
  let snake: any[][] = [dominoes[0].values];
  for (let nextItem: number = 0; nextItem < dominoes.length; nextItem++) {
    for (let i: number = 1; i < dominoes.length; i++) {
      if (snake[nextItem][1] === dominoes[i].values[0]) {
        snake.push(dominoes[i].values);
      }  
    }
  }
  return snake;
}
console.log(orderIntoSnake(dominoes));

