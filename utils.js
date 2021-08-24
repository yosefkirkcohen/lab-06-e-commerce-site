export function findById(someArray, someId) {
    for (let item of someArray) {
        if (someId === item.id) {
            return item;
        }
    }
}

export function calcItemTotal(price, quantity) {
    return price * quantity;
}

export function calcOrderTotal(cartArray, productsArray) {
    let total = 0;
    for (let item of cartArray) {
        const product = findById(productsArray, item.id);
        total = total + calcItemTotal(product.price, item.quantity);
    }
    return total;
}