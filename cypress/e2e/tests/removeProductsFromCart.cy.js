
import AddToCart from '../pages/addCart';
import ViewCartProducts from '../pages/viewCartProducts';
import RemoveProductCart from '../pages/removeProductsFromCart';

describe('Remove Product from Cart using POM', () => {
  const addCart = new AddToCart();
  const viewCartProducts = new ViewCartProducts();
  const removeProductsFromCart = new RemoveProductCart();

  it('should add, verify, and then remove a product from the cart', () => {
    addCart.visit();

    addCart.addFirstItemToCart();

    cy.get('.shopping_cart_link').click();

    viewCartProducts.verifyItemInCart('Sauce Labs Backpack');
    viewCartProducts.verifyRemoveButtonVisible();

    removeProductsFromCart.removeFirstProduct();

    removeProductsFromCart.verifyRemoveButtonNotVisible();
  });
});
