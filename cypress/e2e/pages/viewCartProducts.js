// cypress/pages/cartPage.js

class ViewCartProducts  {
    visit() {
      cy.visit('https://saucedemo.com/v1/cart.html');
    }
  
    getCartItems() {
      return cy.get('.cart_item');
    }
  
    verifyItemInCart(productName) {
      this.getCartItems().should('contain.text', productName);
    }
  
    verifyQuantity(expectedQty) {
      cy.get('.cart_quantity').should('have.text', expectedQty);
    }
  
    verifyRemoveButtonVisible() {
      cy.get('.cart_item .cart_button').should('be.visible').and('contain.text', 'REMOVE');
    }
  
   
  }
  
  export default ViewCartProducts;
  