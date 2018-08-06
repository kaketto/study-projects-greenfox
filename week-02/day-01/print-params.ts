
// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

'use strict';

function printParams(...arg: any[]) {
    for (let i: number = 0; i < arg.length; i++) {
        //to print the items one by one
        console.log(arg[i]);
    }
    // to print the full array:
    console.log(arg);
}

printParams('Bond', 'James Bond', 1, 34, 65);