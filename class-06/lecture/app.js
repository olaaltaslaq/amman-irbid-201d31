'use strict';
let cars = ['kia', 5000, ['shihab', 'khalid', 'mahmoud'], 'usa', 2006, 2002];


//objects
let shihab = {
    // 'user Name': 'shihab',
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
    }
    // ,
    // sayName: function () {
    //     console.log(`my name is ${this.userName}`);
    // }
}

// console.log(shihab);
// // cars[0];
// console.log(shihab.age);
// console.log(shihab['age']);


// console.log(shihab.user Name);

// console.log(shihab['user Name']);

// console.log(shihab.job.jobTitle);
// console.log(shihab.job.level);

// console.log(shihab);
// shihab.sayHi();
// shihab.sayName();
shihab.age = 36;
// this.age = 36;
// this.sayName();
// console.log(shihab);

let majed = {
    // 'user Name': 'shihab',
    userName: 'majed',
    age: 23,
    gender: 'male',
    weight: 68,
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
    }
}
// majed.sayHi();
// majed.sayName();
// majed.fromUser();

let malik = {
    // 'user Name': 'shihab',
    userName: 'malik',
    age: 23,
    gender: 'male',
    weight: 68,
    address: '',
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
    fromUser: function () {
        let userAddress = prompt('tell us your address please');
        this.address = userAddress;
    }
}
// malik.sayHi();
// malik.sayName();

// console.log(this);

// malik.job.salary += 200;
// console.log(malik);
// malik.fromUser();

// console.log(malik.foodlikes);
// for (let i = 0; i < malik.foodlikes.length; i++) {
//     console.log(malik.foodlikes[i]);
// }

// console.log(shihab);
// console.log(shihab.gender);

shihab.mangers = ['ahmad', 'rawan', 'zaid'];

// console.log(shihab);

const pie = 3.14;
const car = {
    carModel: 'kia',
}

// car = 'bmw';
car.carModel = 'bmw';
car.price = 3000;
// console.log(car);

// delete car.price;

// console.log(car);

car.sayModel = function () {
    console.log(this.carModel);
}

//window object
// this.sayModel = function () {
//     console.log('shamikh');
// }

car.sayModel();