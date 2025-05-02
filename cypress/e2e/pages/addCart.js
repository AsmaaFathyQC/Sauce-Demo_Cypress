// cypress/pages/inventoryPage.js

class AddToCart {
    visit() {
      cy.visit('https://saucedemo.com/v1/inventory.html');
    }
  
    getAddToCartButtons() {
      return cy.get('.btn_primary.btn_inventory');
    }
  
    addFirstItemToCart() {
      this.getAddToCartButtons().first().click();
    }
  }
  
  export default AddToCart;
  