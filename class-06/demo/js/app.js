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
let frankie = {
    name: 'frankie',
    age: 0,
    likes: ['eating', 'playing', 'sleeping'],
    image: 'images/frankie.jpeg',
    gwk: true,
    gwd: false,
    gwc: true,
    breed: 'balde',
    getAge: function (min, max) {
        this.age = Math.floor(Math.random() * (max - min + 1) + min);
        // console.log(frankie.age);
    },
    render: function () {
        let divEl = document.getElementById('kittenProfiles');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);

        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;

        let pEl = document.createElement('p');
        pEl.textContent = `i'm ${this.age} months old`;
        articleEl.appendChild(pEl);

        let ulEl = document.createElement('ul');
        for (let i = 0; i < this.likes.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = this.likes[i];
            ulEl.appendChild(liEl);
        }
        articleEl.appendChild(ulEl);

        let imgEl = document.createElement('img');
        imgEl.setAttribute('src', this.image);
        articleEl.appendChild(imgEl);
    }
}
frankie.getAge(1, 5);
frankie.render();

let jumper = {
    name: 'jumper',
    age: 0,
    likes: ['eating', 'fighting', 'playing'],
    image: 'images/jumper.jpeg',
    gwk: true,
    gwd: false,
    gwc: true,
    breed: 'balde',
    getAge: function (min, max) {
        this.age = Math.floor(Math.random() * (max - min + 1) + min);
        // console.log(frankie.age);
    },
    render: function () {
        let divEl = document.getElementById('kittenProfiles');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);

        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;

        let pEl = document.createElement('p');
        pEl.textContent = `i'm ${this.age} months old`;
        articleEl.appendChild(pEl);

        let ulEl = document.createElement('ul');
        for (let i = 0; i < this.likes.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = this.likes[i];
            ulEl.appendChild(liEl);
        }
        articleEl.appendChild(ulEl);

        let imgEl = document.createElement('img');
        imgEl.setAttribute('src', this.image);
        articleEl.appendChild(imgEl);
    }
}
jumper.getAge(1, 5);
jumper.render();

let serena = {
    name: 'serena',
    age: 0,
    likes: ['eating', 'playing', 'sleeping'],
    image: 'images/serena.jpeg',
    gwk: true,
    gwd: false,
    gwc: true,
    breed: 'balde',
    getAge: function (min, max) {
        serena.age = Math.floor(Math.random() * (max - min + 1) + min);
        // console.log(frankie.age);
    },
    render: function () {
        let divEl = document.getElementById('kittenProfiles');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);

        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;

        let pEl = document.createElement('p');
        pEl.textContent = `i'm ${this.age} months old`;
        articleEl.appendChild(pEl);

        let ulEl = document.createElement('ul');
        for (let i = 0; i < serena.likes.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = this.likes[i];
            ulEl.appendChild(liEl);
        }
        articleEl.appendChild(ulEl);

        let imgEl = document.createElement('img');
        imgEl.setAttribute('src', this.image);
        articleEl.appendChild(imgEl);
    }
}

serena.getAge(1, 5);
serena.render();


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
