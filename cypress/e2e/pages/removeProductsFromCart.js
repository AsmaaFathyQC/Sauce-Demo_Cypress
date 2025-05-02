// cypress/support/pages/removeFromCart.js

class RemoveProductCart {
    removeFirstProduct() {
      cy.get('.cart_item .cart_button').first().click();
    }
  
    verifyRemoveButtonNotVisible() {
        cy.get('.cart_button').should('not.exist');
      }
  }
  
  export default RemoveProductCart;
  