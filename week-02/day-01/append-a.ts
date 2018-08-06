// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

'use strict';

let animals: string[] = ['koal', 'pand', 'zebr'];
let animalsNew: string[] = animals.map (function (item: string) {
    return item + 'a';
});
console.log(animalsNew);
