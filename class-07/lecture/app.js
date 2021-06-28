'use strict';
// let shihab = {
//     stdName: 'shihab',
//     age: 35,
//     grade: 90,
//     sayHi: function () {
//         console.log(`hi my name is ${this.stdName}`);
//     }
// }
// shihab.sayHi();
// let emad = {
//     stdName: 'emad',
//     age: 25,
//     grade: 75,
//     sayHi: function () {
//         console.log(`hi my name is ${this.stdName}`);
//     }
// }

// let saddam = {
//     stdName: 'saddam',
//     age: 24,
//     grade: 99,
//     sayHi: function () {
//         console.log(`hi my name is ${this.stdName}`);
//     }
// }

let students = [];

function Student(whatever, age, grade) {
    this.stdName = whatever;
    this.age = age;
    this.grade = grade;
    // this.sayHi = function () {
    //     console.log(`hi my name is ${this.stdName}`);
    // }
    students.push(this);
}

Student.prototype.sayHi = function () {
    console.log(`hi my name is ${this.stdName}`);
}

Student.prototype.sayBye = function () {
    console.log(`bye bye`);
}

Student.prototype.render = function () {
    let trEl = document.createElement('tr');
    let tdEl1 = document.createElement('td');
    let tdEl2 = document.createElement('td');
    let tdEl3 = document.createElement('td');

    tdEl1.textContent = this.stdName;
    tdEl2.textContent = this.age;
    tdEl3.textContent = this.grade;

    trEl.appendChild(tdEl1);
    trEl.appendChild(tdEl2);
    trEl.appendChild(tdEl3);
    tableEl.appendChild(trEl);
}

let shihab = new Student('shihab', 35, 99);
let saddam = new Student('saddam', 24, 100);
let emmam = new Student('emmam', 24, 100);
let trad = new Student('trad', 34, 100);
// let students = [shihab, saddam];
console.log(students);

// console.log(shihab);
// console.log(saddam);
shihab.sayHi();
saddam.sayHi();

shihab.sayBye();
saddam.sayBye();

let containerEl = document.getElementById('container');
let tableEl = document.createElement('table');
containerEl.appendChild(tableEl);
let trEl = document.createElement('tr');
let thEl1 = document.createElement('th');
thEl1.textContent = 'Name';
let thEl2 = document.createElement('th');
thEl2.textContent = 'Age';
let thEl3 = document.createElement('th');
thEl3.textContent = 'Grade'
trEl.appendChild(thEl1)
trEl.appendChild(thEl2)
trEl.appendChild(thEl3)
tableEl.appendChild(trEl);

trad.render();
shihab.render();
saddam.render();
emmam.render();