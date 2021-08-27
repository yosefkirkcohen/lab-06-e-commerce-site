import { addToCart } from '../local-storage-utils.js';
import { addToProducts } from '../local-storage-utils.js';
const cart = [];

const test = QUnit.test;

test('should take in a product and add it to the products in local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const product = {
        id: 3,
        cereal: 'whatever'
    };

    const storageProductsBefore = [{
        id: 8,
        cereal: 'heyho'
    },
    {
        id: 9,
        cereal: 'alohaaaa'
    }];



    const storageProductsAfter = [{
        id: 8,
        cereal: 'heyho'
    },
    {
        id: 9,
        cereal: 'alohaaaa'
    },
    {
        id: 3,
        cereal: 'whatever'
    }];


    const stringyProducts = JSON.stringify(storageProductsBefore);
    localStorage.setItem(stringyProducts);

    const stringyProductsAfter = JSON.stringify(storageProductsAfter);

    const expected = localStorage.setItem(stringyProductsAfter);
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addToProducts(product);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
