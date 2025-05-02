// cypress/e2e/inventoryTest.cy.js

import RemoveFromCart from '../pages/removeFromCart';

describe('Cart functionality using POM', () => {
  const removeFromCart = new RemoveFromCart();

  it('should add and then remove an item from the cart', () => {
    removeFromCart.visit();

    // Add item to cart
    removeFromCart.addFirstItemToCart();
    removeFromCart.verifyItemIsInCart();

    // Remove the same item
    removeFromCart.removeFirstItemFromCart();
    removeFromCart.verifyItemIsRemoved();
  });
});
