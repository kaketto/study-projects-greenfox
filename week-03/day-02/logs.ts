// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

'use strict';
export { };

const fs = require('fs');

//THIS READS THE FILE AND RETURNS AN ARRAY THE ELEMENTS OF WHICH INCLUDE THE TEXT BY LINES:
function readFile(file: string) {
  let fileContent: string[] = fs.readFileSync(file, 'utf-8').split('\n');
  return fileContent;
}

function uniqueIPs(fileName: string) {
  let listOfIPs: string[] = [];
  readFile(fileName).forEach(elem => listOfIPs.push(elem.slice(27, 38)));
  /* FIRST VERSION RETURNING THE UNIQUE IPS IN SORTED ORDER:
  let sortedListOfIPs: string[] = listOfIPs.sort();
  let listOfUniqueIPs: string[] = [];
  for (let i: number = 0; i < sortedListOfIPs.length; i++) {
    if (sortedListOfIPs[i] !== sortedListOfIPs[i+1]) {
      listOfUniqueIPs.push(sortedListOfIPs[i]);
    }
  }
  */
  // VERSION 2 RETURNS THE UNIQUE IPS IN THE ORDER APPEARING IN THE ORIGINAL LIST:
  let listOfUniqueIPs: string[] = [];
  listOfIPs.forEach(function (item) {
    if (listOfUniqueIPs.every(elem => elem !== item)) {
      listOfUniqueIPs.push(item);
    }
  });
  return listOfUniqueIPs;
}

console.log(uniqueIPs('log.txt'));

function GetPostRatio(fileName: string) {
  let indexOfP: number = readFile(fileName)[0].indexOf('POST');
  let GetsAndPosts: string[] = [];
  let Gets: string[] = [];
  let Posts: string[] = [];
  readFile(fileName).forEach(elem => GetsAndPosts.push(elem.slice(indexOfP, indexOfP + 4)));
  GetsAndPosts.forEach(function (item) {
    if (item === 'GET ') {
      Gets.push(item);
    } else {
      Posts.push(item);
    }
  });
  return `${Math.round(Gets.length / (Gets.length + Posts.length) * 100)}% GET requests, ${Math.round(Posts.length / (Gets.length + Posts.length) * 100)}% POST requests`;
}

console.log(GetPostRatio('log.txt'));

