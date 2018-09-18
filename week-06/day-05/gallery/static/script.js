const album = [
  {title: 'red panda', description: 'blablabla', img: 'https://o.aolcdn.com/images/dims3/GLOB/crop/3600x1800+0+150/resize/630x315!/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F1d4ee47dbccace0949ddcb2f75618b42%2F203326867%2F493156892.jpg'},
  {title: 'panda bear', description: 'valami valami', img: 'https://timedotcom.files.wordpress.com/2017/03/panda-black-white-study.jpg?quality=85&w=1012&h=569&crop=1'},
  {title: 'cats', description: 'animals', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnplE8ZzUJo1I1t_ZZ9rD_hKQJlIhAfRo1l7tqDdWnZU4V_x_0'},
];

let index = 0;
let mainPhoto = document.getElementById('main-photo');
let picTitle = document.getElementsByTagName('h2');
let desc = document.getElementsByTagName('p');

function changeToPrevPhoto(){
  if (index === 0) {
    index = album.length - 1;
  } else {
    index--;
  }
  mainPhoto.setAttribute('src', album[index].img);
  picTitle[0].innerText = album[index].title;
  desc[0].innerText = album[index].description;
}  

function changeToNextPhoto(){
  if (index === album.length - 1) {
    index = 0;
  } else {
    index++;
  }
  mainPhoto.setAttribute('src', album[index].img);
  picTitle[0].innerText = album[index].title;
  desc[0].innerText = album[index].description;
} 