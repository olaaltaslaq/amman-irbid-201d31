'use strict';

// target our order form from the html
const orderForm = document.getElementById('orderForm');
const orders = document.getElementById('orders');
Coffee.drinks = [];
// let drinks = [];

// let normalObj = {
//     stdName: 'abdullah',
//     age: 23,
//     grade: 86
// }
// console.log('normal object', normalObj);
// console.log('normal object', typeof normalObj);

// let stringObj = JSON.stringify(normalObj);

// console.log('string object', stringObj);
// console.log('string object', typeof stringObj);

// let normalObj2 = JSON.parse(stringObj);
// console.log('normal object 2', normalObj2);
// console.log('normal object 2', typeof normalObj2);

function saveToLocalStorage() {
    let data = JSON.stringify(Coffee.drinks);
    localStorage.setItem('coffee', data);
}
function readFromLocalStorage() {
    let stringObj = localStorage.getItem('coffee');
    // console.log(stringObj);
    let normalObj = JSON.parse(stringObj);
    // console.log(normalObj);
    if (normalObj !== null) {
        Coffee.drinks = normalObj;
        renderOrders();
    }
    // console.log(Coffee.drinks);
}
readFromLocalStorage();
// constructor function to create a basic drink
function Coffee(custName, size, milk, isHot, drinkType) {
    this.custName = custName;
    this.size = size;
    this.isHot = isHot;
    this.drinkType = drinkType;
    this.milk = milk;
    // add every drink that gets created into an array
    Coffee.drinks.push(this);
}
// event handler function to run every time the form is submitted
function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    // get all the values from the form
    let custName = event.target.custName.value;
    let size = event.target.size.value;
    let isHot = event.target.isHot.checked;
    let dType = event.target.drinkType.value;
    let milk = event.target.milk.value;

    new Coffee(custName, size, milk, isHot, dType);

    // update the previous orders with the new order
    renderOrders();
}


function renderOrders() {
    // clear all my current uls to prevent duplicate information
    orders.textContent = '';
    // go through the array and output the details of each drink in the array
    for (let i = 0; i < Coffee.drinks.length; i++) {
        let drinkLI = document.createElement('li');
        let infoP = document.createElement('p');
        let temp;
        if (Coffee.drinks[i].isHot) {
            temp = 'hot';
        } else {
            temp = 'cold';
        }
        infoP.textContent = `${Coffee.drinks[i].custName} ordered a ${temp} ${Coffee.drinks[i].size} OZ ${Coffee.drinks[i].drinkType} with ${Coffee.drinks[i].milk} milk.`;
        drinkLI.appendChild(infoP);
        orders.appendChild(drinkLI);
    }
    saveToLocalStorage();
}
// Add an event listener to the submit button
orderForm.addEventListener('submit', handleSubmit);
