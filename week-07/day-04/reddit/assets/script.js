window.onload = () => {
  const host = 'http://localhost:8888';

  fetch(`${host}/posts`)
  .then((resp) => (resp.json()))
  .then(response => {

    let list = document.getElementsByTagName('ul')[0];

    response.posts.forEach(element => {
      let newPost = document.createElement('li');
      let voting = document.createElement('div');
      voting.classList.add('voting');
      let content = document.createElement('div');
      content.classList.add('content');
      for (key in element) {
        let item = document.createElement('p');
        item.textContent = element[key];
        if (key === 'score') {
          voting.appendChild(item);
        } else if (key !== 'id') {
        content.appendChild(item);
        }        
      newPost.appendChild(voting);
      newPost.appendChild(content);
      }
    list.appendChild(newPost);
    });
  });
} 
