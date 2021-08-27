import { addToCart } from "../local-storage-utils.js";

const cart = [];

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addToCart(3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
