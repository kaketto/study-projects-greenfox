'use strict';

window.onload = () => {
  let httpRequest = new XMLHttpRequest();

  const form = document.querySelector('#formHandler');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let url = [
      'https://swapi.co/api/',
      // `people/`,
      `${event.target[0].value}`,
    ].join('');
  
    httpRequest.open('GET', url, true);
    httpRequest.onload = () => {
      if (httpRequest.status === 200) {
        const result = JSON.parse(httpRequest.response);
        console.log(result.results);
        let maindiv = document.querySelector('.result');
        let divCharacterList = document.createElement('div');
        let divMovieList = document.createElement('div');
        
        result.results.forEach(element => {
          let divCharacter = document.createElement('div');
          divCharacter.innerHTML = element.name;
          divCharacterList.appendChild(divCharacter);
          let movies = element.films;
          divCharacter.addEventListener('click', () => {

            movies.forEach( item => {
              let httpRequest = new XMLHttpRequest();
              httpRequest.open('GET', item , true);
              httpRequest.onload = () => {
                if (httpRequest.status === 200) {
                  const oneMovie = JSON.parse(httpRequest.response);
                  let divMovie = document.createElement('div');
                  divMovie.innerHTML = oneMovie.title;
                  divMovieList.appendChild(divMovie);
                }
              }
              httpRequest.send();
            });
          });
        });
        maindiv.appendChild(divCharacterList);
        maindiv.appendChild(divMovieList);
    }};
    
    httpRequest.send();
  })
}