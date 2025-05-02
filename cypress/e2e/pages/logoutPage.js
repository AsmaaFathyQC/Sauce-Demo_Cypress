class LogoutPage {
  openMenu() {
    cy.get('#react-burger-menu-btn').click();
  }

  clickLogout() {
    cy.get('#logout_sidebar_link').click();
  }

  verifyLoggedOut() {
    cy.url().should('include', 'saucedemo.com');
    cy.get('[data-test="login-button"]').should('be.visible');
  }
}

export default LogoutPage;
