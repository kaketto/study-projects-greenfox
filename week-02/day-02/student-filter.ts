'use strict';

const students: any[] = [
    { name: 'Mark', age: 9.5, candies: 2 },
    { name: 'Paul', age: 12, candies: 5 },
    { name: 'Clark', age: 7, candies: 3 },
    { name: 'Pierce', age: 12, candies: 7 },
    { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function More4CandiesStudents(AllStudents: any[]) {
    let ListOfNames: string[] = [];
    AllStudents.forEach(element => {
        if (element.candies > 4) {
            ListOfNames.push(element.name)
        }
    });
    return ListOfNames
}

console.log(More4CandiesStudents(students));

function averageCandies(AllStudents: any[]) {
    let sumOfCandies: number = 0;
    AllStudents.forEach(element => {
        sumOfCandies += element.candies;
    });
    return sumOfCandies / AllStudents.length
}
console.log(averageCandies(students));
