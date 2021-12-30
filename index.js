// Import stylesheets
import './style.css';

import { Products } from './Modules/Data.js';
import { Card, select } from './Modules/Helper.js';


let cart = [];

const itemDiv = select('.item');
const cartDiv = select('.cart');
const itemNum = select('.item-count');
const totalPrice = select('.total');

initialRenderer();

function initialRenderer() {
  Products.forEach((prod) => {
    itemDiv.append(
      Card({
        name: prod.name,
        price: prod.price,
        id: prod.id,
        btnName: 'Add To Cart',
        btnEvent: (id) => addToCart(id),
      })
    );
  });
}

function addToCart(id) {
  Products.filter((prod) => {
    if (prod.id === id) {
      cart.push({
        name: prod.name,
        price: prod.price,
        id: prod.id,
      });
    }
    cartDiv.classList.add('active');
  });
  renderCart(cart);

  showPrice();
}

function removeFromCart(id) {
  let filteredItem = cart.filter((prod) => {
    return prod.id !== id;
  });

  cart = filteredItem;

  renderCart(cart);

  if (cart.length === 0) {
    cartDiv.classList.remove('active');
  }

  showPrice();
}

function renderCart(updatedCart) {
  cartDiv.innerHTML = null;
  updatedCart.forEach((prod) => {
    cartDiv.append(
      Card({
        name: prod.name,
        price: prod.price,
        id: prod.id,
        btnName: 'Remove From Cart',
        btnEvent: (id) => removeFromCart(id),
      })
    );
  });

  itemNum.innerText = updatedCart.length;
}

function showPrice() {
  let totalCost = 0;
  cart.forEach((item) => {
    return (totalCost += item.price);
  });
  totalPrice.innerText = totalCost;
}