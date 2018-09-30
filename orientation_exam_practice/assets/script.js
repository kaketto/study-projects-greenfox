'use strict';

window.onload = () => {
  const host = 'http://localhost:8080';

  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let userInput = e.target.elements[0];  

    fetch(`${host}/matrix`, {
      method: 'post', 
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({matrix_input: userInput.value})
      })
    .then((resp) => (resp.json()))
    .then(response => {
      
      let resultField = document.querySelector('.result p');
      resultField.innerHTML = response;
    });
  })
}
