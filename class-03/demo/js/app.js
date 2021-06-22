// // 'use strict';
// // //truthy and falsey values
// // //truthy
// // //1
// // let num = 1;
// // if (num) {
// //     console.log('hi');
// // }
// // //true
// // let yesno = true;
// // if (yesno) {
// //     console.log('hi');
// // }

// // //'true'
// // let yesnoasstring = 'true';
// // if (yesnoasstring) {
// //     console.log('hi');
// // }
// // //'false'
// // let noasstring = 'false';
// // if (noasstring) {
// //     console.log('hi');
// // }
// // //'0'
// // let noasstring = '0';
// // if (noasstring) {
// //     console.log('hi');
// // }
// // //' '
// // let noasstring = ' ';
// // if (noasstring) {
// //     console.log('hi');
// // }

// // let num2 = 3 / 5;
// // if (num2) {
// //     console.log('hi');
// // }

// // let num3 = -3;
// // if (num3) {
// //     console.log('hi');
// // }

// // //falsey 
// // let num4 = 0;
// // if (num4) {
// //     console.log('true');
// // } else {
// //     console.log('false');
// // }

// // //''
// // let myname = '';
// // if (myname) {
// //     console.log('true');
// // } else {
// //     console.log('false');
// // }

// // let answer = null;
// // if (answer) {
// //     console.log('true');
// // } else {
// //     console.log('false');
// // }

// // // let answer2;
// // let answer2 = undefined;
// // if (answer2) {
// //     console.log('true');
// // } else {
// //     console.log('false');
// // }

// // let num6 = '3' / '4';
// // if (num6) {
// //     console.log('true');
// //     console.log(num6);
// // } else {
// //     console.log('false');
// // }

// // let num7 = 3 / 's';
// // if (num7) {
// //     console.log('true');
// // } else {
// //     console.log('false');
// //     console.log(num7);
// //     console.log(typeof num7);
// // }

// // // loops
// // //for
// // // for (let i = 0; i < something; i++) {
// // //     //code
// // // }

// // // //while
// // // while(condition){
// // //     //code

// // // }

// //ask the user for his/her name and if he/she entered '' ask him/her again

// // let userName = prompt('please enter your name?');
// // // while (userName === '' || userName === ' ') {
// // //     userName = prompt('please enter your name?');
// // // }
// // while (userName === '') {
// //     userName = prompt('please enter your name?');
// // }
// //'' >>> false
// // while (!userName) {
// //     userName = prompt('please enter your name?');
// // }

// //print from 1-100
// // console.log(1);
// // console.log(2);
// // console.log(3);
// // console.log(4);
// //i = 1 >>> T
// //i = 2 >>> T
// //i = 3 >>> T
// // for (let i = 1; i <= 10; i++) {
// //     // if (i === 2) {
// //     //     continue;
// //     // }
// //     // if (i === 3) {
// //     //     break;
// //     // }

// //     console.log(i);
// // }

// // let num10 = 1;
// // do {
// //     console.log(num10);
// //     num10++;
// // } while (num10 <= 10);

// // let numx = 1;
// // do {
// //     console.log(numx);
// // } while (numx <= 0);

// // while(condition){
// //     //code
// // }

// // let car1 = 'kia';
// // let car2 = 'bmw';
// // let car3 = 'ford';
// //array
// let emptyArray = [];

// let cars = ['kia', 'bmw', 'ford'];

// console.log('the array length ', cars.length);

// // console.log(cars[0]);
// // console.log(cars[1]);
// // console.log(cars[2]);
// // console.log(cars[3]);

// //i = 0 >>>> T 'kia'
// //i = 1 >>>> T 'bmw'
// //i = 2 >>>> T 'ford'
// //i = 3 >>>> F
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// cars.push('toyota');
// cars.push(5000);
// console.log(cars);

// let cars2 = ['kia', 2002, 'shihab', 5000, 'silver', ['ahmad', 'khalid', 'saddam', 2002, 2005, 2009], 5];
// console.log(cars2);
// console.log(cars2[5][2]);
