// cypress/e2e/inventoryTest.cy.js

import AddToCart from '../pages/addCart';

describe('Add to Cart using POM', () => {
  const addCart = new AddToCart();

  it('should add the first item to the cart', () => {
    addCart.visit();
    addCart.addFirstItemToCart();

    // Optional: Validate that the button text changes to "REMOVE"
    cy.get('.btn_secondary.btn_inventory').should('contain', 'REMOVE');
  });
});
