/* Other functional programming methods */

// Methode reduce
const cart = [{
    quantity: 1,
    name: 'PANTS',
    price: 50
}, {
    quantity: 1,
    name: 'GLOVES',
    price: 20
}, {
    quantity: 2,
    name: 'SHIRTS',
    price: 70
}];

const total = cart

    // Old long way
    // .reduce((acc, value, index) => {
    //     console.log(`acc: ${acc}, value: ${value}, index: ${index}`);
    //     acc += value.price * value.quantity;
    //     return acc;
    // }, 0);

    // New short way
    .reduce((acc, value) => (acc += value.price * value.quantity), 0);

console.log(total); // 210
