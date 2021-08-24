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