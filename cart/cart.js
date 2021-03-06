import { getCart } from '../local-storage-utils.js';
import { getProducts } from '../local-storage-utils.js';

import { renderTableRow } from './render-table-row.js';
import { calcOrderTotal } from '../utils.js';

const cartTBody = document.getElementById('cart-t-body');

for (let item of getCart()) {
    const tr = renderTableRow(item);


    cartTBody.append(tr);
}

const orderTotal = calcOrderTotal(getCart(), getProducts());

const orderTotalTd = document.getElementById('order-total');

orderTotalTd.textContent = orderTotal;

const orderButton = document.getElementById('order-button');

if (cart.length === 0) {
    orderButton.disabled = true;
}

orderButton.addEventListener('click', () => {
    alert(JSON.stringify(cart, true, 2));
    localStorage.removeItem('CART');
    window.location.replace('../index.html');
});
