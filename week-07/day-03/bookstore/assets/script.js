window.onload = () => {
  const host = 'http://localhost:8080/api';

  fetch(`${host}/v1/books`)
  .then((resp) => (resp.json()))
  .then(response => {
    let table = document.getElementById('books');
    let header = document.createElement('tr');
    header.classList.add('header');
    let headerTitle = document.createElement('th');
    headerTitle.textContent = 'Title';
    header.appendChild(headerTitle);
    table.appendChild(header);
    response.books.forEach(element => {
      let row = document.createElement('tr');
      let bookItem = document.createElement('td');
      bookItem.textContent = element.book_name;
      row.appendChild(bookItem);
      table.appendChild(row);
    });
  });
} 