import { findById } from './utils.js';

export function getCart() {
    
    const stringyCart = localStorage.getItem('CART');
    let cart = JSON.parse(stringyCart);
    if (!cart) {
        cart = [];
    }
    return cart;
} 

export function setCart(cart) {
    const stringyCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringyCart);
}

export function addToCart(theId) {
    let cart = getCart();
   
    const product = findById(cart, theId);
    if (product) {
        product.quantity++;
    } else {
        const newItem = {
            id: theId,
            quantity: 1
        };
        cart.push(newItem);
    }
    setCart(cart);
}

export function clearCart() {

}