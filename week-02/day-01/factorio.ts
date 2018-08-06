// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(number: number) {
    let factorial: number = 1;
    for (let i: number = 1; i <= number ; i++) {
        factorial = factorial * i;
    } 
    return factorial
}

console.log(factorio(4));
