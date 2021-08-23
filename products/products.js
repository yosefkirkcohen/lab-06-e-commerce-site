import { renderItem } from './utils.js';
import { products } from './cereals.js';
const ulEl = document.getElementById('ul');
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
for (let item of products) {
    const listItem = renderItem(item);
    ulEl.append(listItem);
}


