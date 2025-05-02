// cypress/e2e/removeProductFromCart.cy.js

import AddToCart from '../pages/addCart';
import ViewCartProducts from '../pages/viewCartProducts';
import RemoveProductCart from '../pages/removeProductsFromCart';

describe('Remove Product from Cart using POM', () => {
  const addCart = new AddToCart();
  const viewCartProducts = new ViewCartProducts();
  const removeProductsFromCart = new RemoveProductCart();

  it('should add, verify, and then remove a product from the cart', () => {
    addCart.visit();

    // Add item to cart
    addCart.addFirstItemToCart();

    // Navigate to cart
    cy.get('.shopping_cart_link').click();

    // Verify item exists before removal
    viewCartProducts.verifyItemInCart('Sauce Labs Backpack');
    viewCartProducts.verifyRemoveButtonVisible();

    // Remove item
    removeProductsFromCart.removeFirstProduct();

    // Verify it is removed
    removeProductsFromCart.verifyRemoveButtonNotVisible();
  });
});
