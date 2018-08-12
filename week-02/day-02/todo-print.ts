'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention
// Expected outpt:
// My todo:
//  - Buy milk
//  - Download games
//      - Diablo
let todoText: string [] = [' - Buy milk'];
let text: string = 'My todo:';
let text2: string = ' - Download games';
let text3: string = '\t - Diablo';
todoText.unshift(text);
todoText.push(text2, text3);

todoText.forEach(item => console.log(item));
