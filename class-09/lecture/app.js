// 'use strict';
// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
let container = document.getElementById('container');

// // btn1.addEventListener('click', sayHi);
// // btn2.addEventListener('click', sayBye);

// // btn2.addEventListener('click', function () {
// //     alert('hi');
// // });

// // function sayHi() {
// //     alert('hi');
// // }
// // function sayBye() {
// //     alert('bye');
// // }

// btn1.addEventListener('click', addP)

// function addP() {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'thank for you help abdullah';
//     container.appendChild(pEl);
// }

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', addP);

function addP(event) {
    console.log(event);
    event.preventDefault();
    let pEl = document.createElement('p');
    let stdName = event.target.batata.value;
    let age = event.target.age.value;
    let grade = event.target.grade.value;
    pEl.textContent = `hi my name is ${stdName} and i'm ${age} years old my grade is ${grade}.`
    container.appendChild(pEl);
}