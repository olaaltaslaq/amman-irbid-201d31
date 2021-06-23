'use strict';
// let num1 = Number(prompt('enter num1'));
// let num2 = Number(prompt('enter num2'));
//functions
//block of code that do something 
//we need to call the function

// console.log(multi(num1, num2));

// function multi(x, y) {
//     let multi = x * y;
//     return multi;
// }

let getAge = function (year, userName) {
    let age = 2021 - year
    return [age, userName];
}
// getAge(1986, 'shihab')
// [age, userName]
// [0]

console.log(getAge(1986, 'shihab')[0]);
console.log(getAge(1996, 'laith')[1]);


(function (userName) {
    console.log('hello ' + userName);
})('abd');

//global variable
let fName = 'osama';

function printName() {
    console.log(fName);
    let lName = 'albasha';
    console.log('lName inside the function', lName);
}
// console.log('lName outside the function', lName);
printName();