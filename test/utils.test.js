
import { getProducts } from '../local-storage-utils.js';
import { findById } from '../utils.js';
import { calcItemTotal } from '../utils.js';
import { getCart } from '../local-storage-utils.js';
import { calcOrderTotal } from '../utils.js';


const test = QUnit.test;

test('should take an id and find corresponding item from an array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 1,
        name: 'Wheat Chex',
        image: '../assets/wheatchex.jpeg',
        description: 'Baked, square shaped cereal',
        category: 'wheat',
        price: 4.00
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(getProducts(), 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should take in price and quantity', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 9.75;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(3.25, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test ('should take in cart and product arrays and give a cart total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcOrderTotal(getCart(), getProducts());

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});