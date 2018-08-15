// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

'use strict';

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor( backgroundColor: string, text: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }
}

let Idea: PostIt = new PostIt('orange', 'Idea 1', 'blue');
let Awesome: PostIt = new PostIt('pink', 'Awesome', 'black');
let Superb: PostIt = new PostIt('yellow', 'Superb!', 'green');

console.log(Idea);
console.log(Awesome);
console.log(Superb);


