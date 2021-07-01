'use strict';
let kittenArray = [];
function Kitten(catName, likes, img, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats, breed) {
  this.catName = catName;
  this.likes = likes;
  this.img = img;
  this.age = 0;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithOtherCats = isGoodWithOtherCats;
  this.breed = breed;
  kittenArray.push(this);
}
Kitten.prototype.getAge = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  this.age = Math.floor(Math.random() * (max - min + 1) + min);
}
Kitten.prototype.render = function () {
  let divEl = document.getElementById('kittenProfiles');
  let articleEl = document.createElement('article');
  divEl.appendChild(articleEl);
  let h2El = document.createElement('h2');
  h2El.textContent = this.catName;
  articleEl.appendChild(h2El);
  let pEl = document.createElement('p');
  pEl.textContent = `i am ${this.age} months old.`
  articleEl.appendChild(pEl);
  let ulEl = document.createElement('ul');
  articleEl.appendChild(ulEl);
  for (let i = 0; i < this.likes.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = this.likes[i];
    ulEl.appendChild(liEl)
  }
  let tableEl = document.createElement('table');
  articleEl.appendChild(tableEl);
  let tableHeader = document.createElement('tr');
  tableEl.appendChild(tableHeader);
  let thEl1 = document.createElement('th');
  thEl1.textContent = 'isGoodWithKids';
  tableHeader.appendChild(thEl1);
  let thEl2 = document.createElement('th');
  thEl2.textContent = 'isGoodWithDogs';
  tableHeader.appendChild(thEl2);
  let thEl3 = document.createElement('th');
  thEl3.textContent = 'isGoodWithOtherCats';
  tableHeader.appendChild(thEl3);
  let tableBody = document.createElement('tr');
  tableEl.appendChild(tableBody);
  let td1 = document.createElement('td');
  tableBody.appendChild(td1);
  td1.textContent = this.isGoodWithKids;
  let td2 = document.createElement('td');
  tableBody.appendChild(td2);
  td2.textContent = this.isGoodWithDogs;
  let td3 = document.createElement('td');
  tableBody.appendChild(td3);
  td3.textContent = this.isGoodWithOtherCats;
  let imgEl = document.createElement('img');
  articleEl.appendChild(imgEl);
  imgEl.setAttribute('src', `${this.img}`);
}

let frankie = new Kitten('frankie', ['eating', 'sleeping', 'playing'], 'images/frankie.jpeg', true, true, false, 'baldee');
frankie.getAge(1, 12);
frankie.render();

let jumper = new Kitten('jumper', ['eating', 'fighting', 'playing'], 'images/jumper.jpeg', true, false, false, 'sheraz');
jumper.getAge(1, 5);
jumper.render();

let serena = new Kitten('serena', ['eating', 'sleeping', 'napping'], 'images/serena.jpeg', true, true, true, 'baldee');
serena.getAge(1, 6);
serena.render();

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', addCat);
function addCat(event) {
  event.preventDefault();

  let catName = event.target.catName.value;

  let likes = event.target.likes.value.split(',');
  // console.log(likes.split(','));
  let img = event.target.img.value;
  let isGoodWithKids = event.target.isGoodWithKids.checked;
  let isGoodWithDogs = event.target.isGoodWithDogs.checked;
  let isGoodWithOtherCats = event.target.isGoodWithOtherCats.checked;
  let breed = event.target.breed.value;

  let newCat = new Kitten(catName, likes, img, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats, breed)
  newCat.getAge(1, 9);
  newCat.render();
}
