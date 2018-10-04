'use strict';
const host = 'http://localhost:8080';

window.onload = () => {

  
  const fetchDeleteQuestion = (questionID) => {
    fetch(`${host}/questions/${questionID}`, {
      method: 'delete', 
      headers: {
         "Content-Type": "application/json; charset=utf-8",
      }
    })
    .then((resp) => resp.json())
    .then((response) => {
      if (response.message === "OK") {
      location.reload();
      }
    });
  };
  
  fetch(`${host}/questions`)
  .then((resp) => resp.json())
  .then((response) => {
    
    const listOfQuestionsDiv = document.querySelector('.listOfQuestionsDiv');
    let list = document.createElement('ul');
    response.forEach(element => {
      let listItem = document.createElement('li');
      let question = document.createElement('p');
      question.innerText = element.question;
      listItem.appendChild(question);
      let deleteButton = document.createElement('button');
      deleteButton.innerText = 'delete';
      deleteButton.addEventListener('click', () => {
        fetchDeleteQuestion(element.id)
      })
      listItem.appendChild(deleteButton);
      list.appendChild(listItem);
    });
    listOfQuestionsDiv.appendChild(list);
  });
};