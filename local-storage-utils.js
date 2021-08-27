import { findById } from './utils.js';
import { products } from './products/cereals.js';

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
    const cart = getCart();
   
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

export function getProducts() {
    const stringyProducts = localStorage.getItem('PRODUCTS');
    if (!stringyProducts) {
        const storageProducts = products;
        console.log(1);
        return storageProducts;
    } else {
        console.log(2);
        const storageProducts = JSON.parse(stringyProducts);
        return storageProducts;
    }
}

export function setProducts(products) {
    const stringyProduct = JSON.stringify(products);
    localStorage.setItem('PRODUCTS', stringyProduct);
}

export function addToProducts(product) {
    const storageProducts = getProducts();
    storageProducts.push(product);
    setProducts(storageProducts);
}