window.onload = () => {
  const host = 'http://localhost:8080/api';

  fetch(`${host}/v1/books`)
  .then((resp) => (resp.json()))
  .then(response => {

    let table = document.getElementById('books');
    let headerRow = document.createElement('tr');
    headerRow.classList.add('header');
    let headers = ['Title', 'Author', 'Category', 'Publisher', 'Price'];
    headers.forEach(item => {
      let headerItem = document.createElement('th');
      headerItem.textContent = item;
      headerRow.appendChild(headerItem);
    })
    table.appendChild(headerRow);

    response.books.forEach(element => {
      let row = document.createElement('tr');
      for (key in element) {
        let item = document.createElement('td');
        item.textContent = element[key];
        row.appendChild(item);
        if (key === 'book_price') {
          item.classList.add('price');
        }
      }        
      table.appendChild(row);
    });
  });
} 