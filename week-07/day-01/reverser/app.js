'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


app.post('/sith', jsonParser, (req, res) => {
  let text = req.body.text;
  if (text === undefined) {
    res.json({
      "error": "Feed me some text you have to, padawan young you are. Hmmm."
    })
  } else {
    let sentences = text.split(".").filter(item => item !== "");
    let newSentences = sentences.map(item => {
      let words = item.split(" ");
      if (words[0] === "") {
        words.splice(0, 1);
      }
      words[0] = words[0].toLowerCase();
      for (let i = 0; i < words.length - 1; i += 2){
        [words[i], words[i + 1]] = [words[i + 1], words[i]]
      };
      words[0] = words[0][0].toUpperCase() + words[0].slice(1);
      return words.join(" ");
    });
    let randomThings = ["Arrgh", "Uhmm", "Err..err", "Err"];
    let result = [];
    for (let i = 0; i < newSentences.length; i++) {
      result.push(newSentences[i]);
      result.push(randomThings[Math.floor(Math.random() * 4)]);
      if (Math.floor(Math.random() * 2) === 1) {
        result.push(randomThings[Math.floor(Math.random() * 4)]);
      };
    };
    res.json({
      sith_text: result.join(". ") + ".",
    })
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);  
});
