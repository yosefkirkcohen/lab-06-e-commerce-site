import { findById } from '../utils.js';
import { getProducts } from '../local-storage-utils.js';
import { calcItemTotal } from '../utils.js';

export function renderTableRow(cartItem) {
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const totalTd = document.createElement('td');

    tr.append(nameTd, priceTd, quantityTd, totalTd);

    const product = findById(getProducts(), cartItem.id);
    nameTd.textContent = product.name;
    priceTd.textContent = product.price.toFixed(2);
    quantityTd.textContent = cartItem.quantity;
    totalTd.textContent = calcItemTotal(product.price, cartItem.quantity);

    return tr;
}