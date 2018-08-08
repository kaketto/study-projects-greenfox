'use strict';

const students: any[] = [
  { name: 'Theodor', age: 3, candies: 2 },
  { name: 'Paul', age: 9.5, candies: 2 },
  { name: 'Mark', age: 12, candies: 5 },
  { name: 'Peter', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'George', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies


function allCandies(allStudent: any[]) {
  let sumOfCandies: number = 0;
  allStudent.forEach(obj => {
    sumOfCandies += obj.candies;
  })
  return sumOfCandies;
}
console.log(allCandies(students));

function SumAgeLess5Candies(allStudent: any[]) {
  let SumAge:number = 0;
  allStudent.forEach(element => {
    if (element.candies < 5) {
      SumAge += element.age;
    }   
  }); 
  return SumAge;
}
console.log(SumAgeLess5Candies(students));



