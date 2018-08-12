'use strict';

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

let festivalgoers: any [] = [];

function securityCheck (arr: any[]) {
    arr.map(function (elem) {
        if (elem['guns'] > 0) {
            watchlist.push(elem['name']);
        } else if (elem['alcohol'] > 0) {
            securityAlcoholLoot += elem['alcohol'];
            elem['alcohol'] = 0;
            festivalgoers.push(elem['name']);
        } else {
            festivalgoers.push(elem['name']);
        }
    });
    console.log(`${watchlist} have gun, entry denied`);
    console.log(`${securityAlcoholLoot} units of alcohol are confiscated from festival visitors`);
    console.log(`${festivalgoers} can enter the festival`);
}

securityCheck(queue);

/* ALTERNATIVE FOR EXCLUDING GUN PEOPLE FROM THE LIST - BUT SOMEHOW WADE IS NOT EXCLUDED (???)
queue.map(function (elem) {
    if (elem['guns'] > 0) {
        queue.splice(queue.indexOf(elem), 1)
        console.log(elem['name']);        
    }
});
console.log(queue);

FILTER FINDS WADE AS WELL
let GunPeople: string [] = queue.filter(elem => elem['guns'] > 0);
console.log(GunPeople);
*/
export = securityCheck;

