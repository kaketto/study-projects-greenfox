'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


app.post('/translate', jsonParser, (req, res) => {
  let text = req.body.text;
  let language = req.body.lang;
  let vowels = /[aáeéiíoóöőuúüű]/gi;
  let sentences = text.split(".").filter(item => item !== "");

  if (text === undefined || language === undefined) {
    res.json({
      "error": "I can't translate that!"
    })
  } else if (language === "hu"){
    let newSentences = sentences.map(item => {
      let words = item.split(" ");
      if (words[0] === "") {
        words.splice(0, 1);
      };
      let teveWords = words.map(elem => {
        let newWord = [];
        let letters = elem.split("");
        for (let i = 0; i < elem.length; i++) {
          let nextLetter = letters.shift();
          if ((nextLetter.match(vowels) || []).length > 0) {
            newWord.push(nextLetter);
            newWord.push("v");
            newWord.push(nextLetter.toLowerCase());
          } else {
            newWord.push(nextLetter);
          }
        }
        return newWord.join("");
      })
      return teveWords.join(" ");
    })

    res.json({
      translated: newSentences.join(". ") + ".",
      lang: "teve",
    })
  } else if (language === "en"){

    res.json({
      translated: "This is supposed to be gibberish",
      lang: "gibberish",
    })
  } 
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);  
});