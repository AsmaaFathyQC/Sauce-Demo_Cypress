
import AddToCart from '../pages/addCart';
import ViewCartProducts from '../pages/viewCartProducts';

describe('Cart View Test using POM', () => {
  const addCart = new AddToCart();
  const viewCartProducts = new ViewCartProducts();

  it('should add item to cart and verify name, quantity, and remove button', () => {
    addCart.visit();

    addCart.addFirstItemToCart();

    cy.get('.shopping_cart_link').click();

    viewCartProducts.verifyItemInCart('Sauce Labs Backpack');
    viewCartProducts.verifyQuantity('1');
    viewCartProducts.verifyRemoveButtonVisible();
  });
});
