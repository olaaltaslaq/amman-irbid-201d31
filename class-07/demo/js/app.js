// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

// TODO: dynamically generate kitten objects 

'use strict';
let kittens = [];

function Kitten(name, likes, image, gwk, gwd, gwc, breed) {
    this.name = name;
    this.likes = likes;
    this.gwk = gwk;
    this.gwd = gwd;
    this.gwc = gwc;
    this.breed = breed;
    this.age = 0;
    this.image = image;

    kittens.push(this);
}

Kitten.prototype.getAge = function (min, max) {
    this.age = Math.floor(Math.random() * (max - min + 1) + min);
}

// Kitten.prototype.render = function () {
//     let divEl = document.getElementById('kittenProfiles');
//     let articleEl = document.createElement('article');
//     divEl.appendChild(articleEl);

//     let h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;

//     let pEl = document.createElement('p');
//     pEl.textContent = `i'm ${this.age} months old`;
//     articleEl.appendChild(pEl);

//     let ulEl = document.createElement('ul');
//     for (let i = 0; i < this.likes.length; i++) {
//         let liEl = document.createElement('li');
//         liEl.textContent = this.likes[i];
//         ulEl.appendChild(liEl);
//     }
//     articleEl.appendChild(ulEl);

//     let imgEl = document.createElement('img');
//     imgEl.setAttribute('src', this.image);
//     articleEl.appendChild(imgEl);
// }

let container = document.getElementById('kittenProfiles');
let tableEl = document.createElement('table');
container.appendChild(tableEl);

function createTableHeader() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let thEl1 = document.createElement('th');
    thEl1.textContent = 'Name';
    trEl.appendChild(thEl1);
    let thEl2 = document.createElement('th');
    thEl2.textContent = 'age';
    trEl.appendChild(thEl2);
    let thEl3 = document.createElement('th');
    thEl3.textContent = 'is good with kids';
    trEl.appendChild(thEl3);
    let thEl4 = document.createElement('th');
    thEl4.textContent = 'is good with dogs';
    trEl.appendChild(thEl4);
    let thEl5 = document.createElement('th');
    thEl5.textContent = 'is good with cats';
    trEl.appendChild(thEl5);
}



let frankie = new Kitten('frankie', ['eating', 'playing', 'sleeping'], 'images/frankie.jpeg', true, false, true, 'baldee');
frankie.getAge(2, 7);
// frankie.render();

let jumper = new Kitten('jumper', ['eating', 'playing', 'sleeping'], 'images/jumper.jpeg', true, true, true, 'baldee');
jumper.getAge(4, 10);
// jumper.render();

let serena = new Kitten('serena', ['eating', 'playing', 'sleeping'], 'images/serena.jpeg', true, false, true, 'baldee');
serena.getAge(2, 7);
// serena.render();

console.log(kittens);

createTableHeader();

for (let i = 0; i < kittens.length; i++) {
    let trEl = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.textContent = kittens[i].name;
    let td2 = document.createElement('td');
    td2.textContent = kittens[i].age;
    let td3 = document.createElement('td');
    td3.textContent = kittens[i].gwk;
    let td4 = document.createElement('td');
    td4.textContent = kittens[i].gwd;
    let td5 = document.createElement('td');
    td5.textContent = kittens[i].gwc;
    trEl.appendChild(td1);
    trEl.appendChild(td2);
    trEl.appendChild(td3);
    trEl.appendChild(td4);
    trEl.appendChild(td5);

    tableEl.appendChild(trEl);
}























// let frankie = {
//     name: 'frankie',
//     age: 0,
//     likes: ['eating', 'playing', 'sleeping'],
//     image: 'images/frankie.jpeg',
//     gwk: true,
//     gwd: false,
//     gwc: true,
//     breed: 'balde',
//     getAge: function (min, max) {
//         this.age = Math.floor(Math.random() * (max - min + 1) + min);
//         // console.log(frankie.age);
//     },
//     render: function () {
//         let divEl = document.getElementById('kittenProfiles');
//         let articleEl = document.createElement('article');
//         divEl.appendChild(articleEl);

//         let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;

//         let pEl = document.createElement('p');
//         pEl.textContent = `i'm ${this.age} months old`;
//         articleEl.appendChild(pEl);

//         let ulEl = document.createElement('ul');
//         for (let i = 0; i < this.likes.length; i++) {
//             let liEl = document.createElement('li');
//             liEl.textContent = this.likes[i];
//             ulEl.appendChild(liEl);
//         }
//         articleEl.appendChild(ulEl);

//         let imgEl = document.createElement('img');
//         imgEl.setAttribute('src', this.image);
//         articleEl.appendChild(imgEl);
//     }
// }
// frankie.getAge(1, 5);
// frankie.render();

// let jumper = {
//     name: 'jumper',
//     age: 0,
//     likes: ['eating', 'fighting', 'playing'],
//     image: 'images/jumper.jpeg',
//     gwk: true,
//     gwd: false,
//     gwc: true,
//     breed: 'balde',
//     getAge: function (min, max) {
//         this.age = Math.floor(Math.random() * (max - min + 1) + min);
//         // console.log(frankie.age);
//     },
//     render: function () {
//         let divEl = document.getElementById('kittenProfiles');
//         let articleEl = document.createElement('article');
//         divEl.appendChild(articleEl);

//         let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;

//         let pEl = document.createElement('p');
//         pEl.textContent = `i'm ${this.age} months old`;
//         articleEl.appendChild(pEl);

//         let ulEl = document.createElement('ul');
//         for (let i = 0; i < this.likes.length; i++) {
//             let liEl = document.createElement('li');
//             liEl.textContent = this.likes[i];
//             ulEl.appendChild(liEl);
//         }
//         articleEl.appendChild(ulEl);

//         let imgEl = document.createElement('img');
//         imgEl.setAttribute('src', this.image);
//         articleEl.appendChild(imgEl);
//     }
// }
// jumper.getAge(1, 5);
// jumper.render();

// let serena = {
//     name: 'serena',
//     age: 0,
//     likes: ['eating', 'playing', 'sleeping'],
//     image: 'images/serena.jpeg',
//     gwk: true,
//     gwd: false,
//     gwc: true,
//     breed: 'balde',
//     getAge: function (min, max) {
//         serena.age = Math.floor(Math.random() * (max - min + 1) + min);
//         // console.log(frankie.age);
//     },
//     render: function () {
//         let divEl = document.getElementById('kittenProfiles');
//         let articleEl = document.createElement('article');
//         divEl.appendChild(articleEl);

//         let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;

//         let pEl = document.createElement('p');
//         pEl.textContent = `i'm ${this.age} months old`;
//         articleEl.appendChild(pEl);

//         let ulEl = document.createElement('ul');
//         for (let i = 0; i < serena.likes.length; i++) {
//             let liEl = document.createElement('li');
//             liEl.textContent = this.likes[i];
//             ulEl.appendChild(liEl);
//         }
//         articleEl.appendChild(ulEl);

//         let imgEl = document.createElement('img');
//         imgEl.setAttribute('src', this.image);
//         articleEl.appendChild(imgEl);
//     }
// }

// serena.getAge(1, 5);
// serena.render();


// object literals
// bracket and dot notation
// math.random
// add kittens to the page
// each kitten gets an Article
// each kitten's name shown as a subhead
// each pic shown as an image with dynamically-created filename (involves setting attributes)
// each array of interests shown as a list
// getElementById
// createElement
// createTextNode
// appendChild
