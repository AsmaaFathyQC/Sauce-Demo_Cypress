// cypress/pages/inventoryPage.js

class RemoveFromCart {
    visit() {
      cy.visit('https://saucedemo.com/v1/inventory.html');
    }
  
    getAddToCartButtons() {
      return cy.get('.btn_primary.btn_inventory');
    }
  
    getRemoveButtons() {
      return cy.get('.btn_secondary.btn_inventory');
    }
  
    addFirstItemToCart() {
      this.getAddToCartButtons().first().click();
    }
  
    removeFirstItemFromCart() {
      this.getRemoveButtons().first().click();
    }
  
    // Assertion to confirm "Remove" is shown
    verifyItemIsInCart() {
      this.getRemoveButtons().first().should('contain', 'REMOVE');
    }
  
    // Assertion to confirm "Add to Cart" is shown
    verifyItemIsRemoved() {
      this.getAddToCartButtons().first().should('contain', 'ADD TO CART');
    }
  }
  
  export default RemoveFromCart;
  