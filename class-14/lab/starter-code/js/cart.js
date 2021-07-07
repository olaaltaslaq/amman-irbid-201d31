/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
let tableBody = table.tBodies[0];
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  //tableBody.remove();
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  for (let i = 0; i < cart.items.length ; i++) {
    let tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);
    let tabled = document.createElement('td');
    tabled.textContent = 'X'
    tableRow.appendChild(tabled);
    let tabled2 = document.createElement('td');
    tabled2.textContent = cart.items[i].product[1];
    tableRow.appendChild(tabled2);
    let tabled3 = document.createElement('td');
    tabled3.textContent = cart.items[i].product[0];
    tableRow.appendChild(tabled3);
  }
}
function removeItemFromCart(event) {
  console.log(event);
  table.deleteRow(event.isTrusted);
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// This will initialize the page and draw the cart on screen
renderCart();