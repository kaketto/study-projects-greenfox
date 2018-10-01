window.onload = () => {
  const host = 'http://localhost:8888';

  function votingFetch (id, direction) {
    fetch(`${host}/posts/${id}/${direction}vote`, {
      method: 'put', 
      headers: {
       "Content-Type": "application/json; charset=utf-8",
      }
    });
  };

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
      let arrowDown = document.createElement('img');
      arrowDown.setAttribute('src', './assets/images/downvote.png');
      arrowDown.addEventListener('click', (e) => {
        arrowDown.setAttribute('src', './assets/images/downvoted.png');
        votingFetch(element.id, 'down');
        e.target.parentElement.childNodes[1].textContent -= 1;
      });  
      let arrowUp = document.createElement('img');
      arrowUp.setAttribute('src', './assets/images/upvote.png');
      arrowUp.addEventListener('click', (e) => {
        arrowUp.setAttribute('src', './assets/images/upvoted.png');
        votingFetch(element.id, 'up');
        e.target.parentElement.childNodes[1].textContent = Number(e.target.parentElement.childNodes[1].textContent) + 1;
      }); 
      voting.appendChild(arrowUp);
      let score = document.createElement('p');
      score.textContent = element['score'];
      voting.appendChild(score);
      voting.appendChild(arrowDown);
      let link = document.createElement('a');
      link.setAttribute('href', element['url']);
      link.textContent = element['title'];
      content.appendChild(link);
      let postInfo = document.createElement('p');
      postInfo.textContent = 'submitted on ' + element['published'] + ' by ' + element['owner'];
      content.appendChild(postInfo);
      newPost.appendChild(voting);
      newPost.appendChild(content);
    list.appendChild(newPost);
    });
  });
}; 
