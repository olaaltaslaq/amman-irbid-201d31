'use strict';

// document.write('<h1> hi</h1>');


let hiEl = document.getElementById('divHi');
console.log(hiEl);
hiEl.textContent = 'ahmad';


let byeEl = document.getElementById('divBye');
console.log(byeEl);
byeEl.textContent = 'bye';


let pEl = document.createElement('P');
pEl.textContent = 'welcome to my site';
console.log(pEl);

let pDiv = document.getElementById('pContent');
pDiv.appendChild(pEl);

let shihab = {
    userName: 'shihab',
    age: 35,
    gender: 'male',
    weight: 100,
    loveCoding: true,
    foodlikes: ['mansaf', 'shawrmah', 'maglobeh'],
    job: {
        jobTitle: 'front end developer',
        level: 'mid',
        salary: 2000,
        place: 'irbid-amman'
    },
    sayHi: function () {
        console.log('hi');
    },
    sayName: function () {
        console.log(`my name is ${this.userName}`);
    },
    render: function () {
        let ulContainer = document.getElementById('ulContainer');
        let ulEl = document.createElement('ul');
        for (let i = 0; i < this.foodlikes.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = this.foodlikes[i];
            ulEl.appendChild(liEl);
        }
        ulContainer.appendChild(ulEl);
    }
}

shihab.render();