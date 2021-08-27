import { renderItem } from './render.utils.js';
import { getProducts } from '../local-storage-utils.js';
const ulEl = document.getElementById('ul');
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const products = getProducts();

for (let item of products) {
    const listItem = renderItem(item);
    ulEl.append(listItem);
}


