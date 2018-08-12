
'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key
const ingredients: any[] = [
	{ name: 'vodka', inStock: 1, needsCooling: true },
	{ name: 'coffee_liqueur', inStock: 0, needsCooling: true },
	{ name: 'fresh_cream', inStock: 1, needsCooling: true },
	{ name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
	{ name: 'mint_leaves', inStock: 0, needsCooling: false },
	{ name: 'sugar', inStock: 0, needsCooling: false },
	{ name: 'lime juice', inStock: 0, needsCooling: true },
	{ name: 'soda', inStock: 0, needsCooling: true }
];

function firstColumnLength (arr: any[]) {
    let lengthOfNames: number[] = [];
    arr.forEach(elem => lengthOfNames.push(elem.name.length));
    return Math.max.apply(null, lengthOfNames) + 1;
}

function printTable (arr: any[]) {
    let frame: string[] = ['+-----------', '+---------------+----------+'];
    let firstRow: string[] = ['| Ingredient', '| Needs cooling | In stock |'];
    for (let i: number = 0; i < firstColumnLength(arr) - 10; i++) {
        frame.splice(1, 0, '-');
        firstRow.splice(1, 0, ' ');
    }
    let frameReady = frame.join('');
    console.log(frameReady);
    console.log(firstRow.join(''));
    console.log(frameReady);
    arr.forEach(function (elem) {
        let lineItem: any [] = ['| '];
        lineItem.push(elem.name);
        for (let i: number = 0; i < firstColumnLength(arr) - elem.name.length; i++) {
            lineItem.push(' ');
        }
        if (elem.needsCooling) {
            lineItem.push('| Yes           | ');
        } else {
            lineItem.push('| No            | ');
        }
        if (elem.inStock === 0) {
            lineItem.push('-');
        } else {
            lineItem.push(elem.inStock);
        }
        lineItem.push('        |');
        let lineItemString: string = lineItem.join('');
        console.log(lineItemString);
    });
    console.log(frameReady);    
}

printTable(ingredients);
