'use strict';
const host = 'http://localhost:8080';

window.onload = () => {

  
  const fetchNewQuestion = () => {
    fetch(`${host}/game`)
    .then((resp) => resp.json())
    .then((response) => {
      location.reload();
    })
  };
  
  fetch(`${host}/game`)
  .then((resp) => resp.json())
  .then((response) => {
    
    const quizArea = document.querySelector('.quiz');
    const h1 = document.querySelector('h1');
    let score = 0;
    score = localStorage.getItem("score");
    h1.innerHTML = `SCORE: ${score}`;
    
    let question = document.createElement('h2');
    question.innerHTML = response.question;
    quizArea.appendChild(question);
    response.answers.forEach(element => {
      let button = document.createElement('button');
      if (element.is_correct === 0) {
        button.classList.add("incorrect");
      } else {
        button.classList.add("correct");
      }
      button.innerText = element.answer;
      button.addEventListener('click', () => {
        if (button.classList.contains('correct')) {
          button.setAttribute('style', 'background-color: green');
          score++;
          h1.innerHTML = `SCORE: ${score}`;
          localStorage.setItem("score", score);
        } else {
          button.setAttribute('style', 'background-color: red');
        }
        let allButtons = document.querySelectorAll('button');
        allButtons.forEach(elem => elem.disabled = true);
        setTimeout(fetchNewQuestion, 5000);
      })
      quizArea.appendChild(button);
    });




  });
};