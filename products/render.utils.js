import { addToCart } from '../local-storage-utils.js';

export function renderItem(cereal) {
    const li = document.createElement('li');
    const cerealName = document.createElement('h3');
    const image = document.createElement('img');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const addButton = document.createElement('button');

    li.append(cerealName, image, description, price, addButton);

    cerealName.textContent = cereal.name;
    image.src = cereal.image;
    description.textContent = cereal.description;
    price.textContent = `$${cereal.price.toFixed(2)}`;
    addButton.textContent = 'Add';

    addButton.addEventListener('click', () => {
        
        addToCart(cereal.id); 

    });

    return li;
}
