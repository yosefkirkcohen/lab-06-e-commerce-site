import { addToProducts } from '../local-storage-utils.js';
const form = document.getElementById('form');
 

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    

    const product = {
        id: data.get('id'),
        name: data.get('cereal'),
        image: data.get('image'),
        description: data.get('description'),
        category: data.get('category'),
        price: Number(data.get('price'))
    };
    addToProducts(product);

});

