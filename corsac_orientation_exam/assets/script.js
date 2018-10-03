'use strict';
const host = 'http://localhost:8080';

window.onload = () => {
  
  const fetchMovehere = (planetID) => {
    fetch(`${host}/movehere/${planetID}`, {
      method: 'post', 
      headers: {
         "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then((resp) => resp.json())
    .then((response) => {
      if (response.result === 'success') {
        location.reload();
      }
    })
  }

  const fetchToShip = (planetID) => {
    fetch(`${host}/toship/${planetID}`, {
      method: 'post', 
      headers: {
         "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then((resp) => resp.json())
    .then((response) => {
      if (response.result === 'success') {
        location.reload();
      }
    })
  }

  const fetchToPlanet = (planetID) => {
    fetch(`${host}/toplanet/${planetID}`, {
      method: 'post', 
      headers: {
         "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then((resp) => resp.json())
    .then((response) => {
      if (response.result === 'success') {
        location.reload();
      }
    })
  }

  fetch(`${host}/planets`)
  .then((resp) => resp.json())
  .then((response) => {

    let tbody = document.querySelector('tbody');
    
    response.forEach(element => {
      let shipUtilization;
      if (element.utilization !== null) {
        shipUtilization = element.utilization
      };
      
      let row = document.createElement('tr');

      let cellPlanet = document.createElement('td');
      cellPlanet.innerHTML = element.name;
      row.appendChild(cellPlanet);

      let cellPopulation = document.createElement('td');
      cellPopulation.innerHTML = element.population;
      row.appendChild(cellPopulation);

      let cellSpaceship = document.createElement('td');
      let cellUtilization = document.createElement('td');
      if (element.utilization === null) {
        let button = document.createElement('button');
        button.innerText = 'Move here';
        button.addEventListener('click', () => {
          fetchMovehere(element.id)});
        cellSpaceship.appendChild(button);
        cellUtilization.innerText = '-';       
      } else {
        let toPlanetButton = document.createElement('button');
        toPlanetButton.innerText = '<-- to planet';
        toPlanetButton.addEventListener('click', () => {
          fetchToPlanet(element.id)});
        cellSpaceship.appendChild(toPlanetButton);
        let toShipButton = document.createElement('button');
        toShipButton.innerText = 'to ship -->';
        toShipButton.addEventListener('click', () => {
          fetchToShip(element.id)});
        cellSpaceship.appendChild(toShipButton);
        cellUtilization.innerHTML = element.utilization;
      }
      
      row.appendChild(cellSpaceship);
      row.appendChild(cellUtilization);
      tbody.appendChild(row)
    });
  });
};
