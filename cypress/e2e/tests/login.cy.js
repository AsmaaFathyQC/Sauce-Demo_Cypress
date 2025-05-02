import LoginPage from '../pages/loginPage'; 

const loginPage = new LoginPage(); 

describe('Data-Driven Login Tests', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('Should validate multiple login scenarios', () => {
    cy.fixture('loginData').then((users) => {
      users.forEach((user) => {
        loginPage.enterUsername(user.username);
        loginPage.enterPassword(user.password);
        loginPage.clickLogin();

        if (user.expected === 'inventory') {
          loginPage.assertLoginSuccess();
        } else {
          loginPage.assertLoginError();
        }

        if (user.expected === 'inventory') {
          cy.visit('/');
        }
      });
    });
  });
});
