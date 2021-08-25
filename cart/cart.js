import { products } from '../products/cereals.js';
import { cart } from './cart-data.js';
import { renderTableRow } from './render-table-row.js';
import { calcOrderTotal } from '../utils.js';

const cartTBody = document.getElementById('cart-t-body');

for (let item of cart) {
    const tr = renderTableRow(item);


    cartTBody.append(tr);
}

const orderTotal = calcOrderTotal(cart, products);

const orderTotalTd = document.getElementById('order-total');

orderTotalTd.textContent = orderTotal;

const orderButton = document.getElementById('order-button');

if (cart.length === 0) {
    orderButton.disabled = true;
}
console.log(cart);
