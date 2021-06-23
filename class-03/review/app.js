'use strict';
// let grades = [10, 20, 40, 50, 100, 35];
// grades.push(45);
// console.log(grades);

// for (let i = 0; i < grades.length; i++) {
//     // grades[i] += 5;
//     grades[i] = grades[i] + 5;
// }
// console.log(grades);

// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.

// let num = 5;
// let q6;
// for (let i = 1; i <= 4; i++) {
//     q6 = Number(prompt('guess a number please 1-20'));
//     if (q6 > num) {
//         alert('too high');
//     } else if (q6 < num) {
//         alert('too low');
//     } else if (q6 === num) {
//         alert('correct');
//         i = 5;
//         // break;
//     }
//     if (i === 4) {
//         alert('the correct number is 5');
//     }
// }
// console.log(q6);
/*
let fruits = ['apple', 'orange', 'banana', 'kiwi'];
let correct = false;
for (let attempt = 1; attempt <= 6; attempt++) {
    // attempt 1
    // attempt 2
    let q7 = prompt('what is my fav fruit').toLowerCase();
    //q7 = batata
    //q7 = orange
    for (let i = 0; i < fruits.length; i++) {
        //i 0
        //i 1
        //i 2
        //i 3
        ////////i 0
        ////////i 1
        if (q7 == fruits[i]) {
            alert('correct');
            // correct = true;
            attempt = 10;
            break;
        }
    }
    // if (correct) {
    //     break;
    // }

    // if (q7 == fruits[0] || q7 == fruits[1] || q7 == fruits[2] || q7 == fruits[3]) {
    //     alert('correct');
    //     break;
    //     // attempt =8;
    // } else {
    //     alert('wrong');
    // }
}*/
let grades = [1, 4, 4, 5, 6, 7, 8];
console.log(grades.indexOf(4));
console.log(grades.indexOf(40));