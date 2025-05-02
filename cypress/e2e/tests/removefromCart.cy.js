
import RemoveFromCart from '../pages/removeFromCart';

describe('Cart functionality using POM', () => {
  const removeFromCart = new RemoveFromCart();

  it('should add and then remove an item from the cart', () => {
    removeFromCart.visit();

    removeFromCart.addFirstItemToCart();
    removeFromCart.verifyItemIsInCart();

    removeFromCart.removeFirstItemFromCart();
    removeFromCart.verifyItemIsRemoved();
  });
});
