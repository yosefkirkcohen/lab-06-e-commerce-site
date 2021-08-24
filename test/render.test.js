import { renderTableRow } from '../cart/render-table-row.js';


const test = QUnit.test;

test('should render a row of a table', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<tr><td>Wheat Chex</td><td>4</td><td>2</td><td>8</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTableRow({
        id: 1,
        quantity: 2
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});