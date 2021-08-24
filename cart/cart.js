import { products } from '../products/cereals.js';
import { cart } from './cart-data.js';
import { renderTableRow } from './render-table-row.js';

const cartTBody = document.getElementById('cart-t-body');

for (let item of cart) {
    const tr = renderTableRow(item);


    cartTBody.append(tr);
}