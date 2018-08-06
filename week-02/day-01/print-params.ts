
// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

'use strict';

function printParams(...arg: any[]) {
    for (let i: number = 0; i < arg.length; i++) {
        console.log(arg[i]);
    }
}

printParams('Bond', 'James Bond', 1, 34, 65);