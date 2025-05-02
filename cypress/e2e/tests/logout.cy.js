import LoginPage from '../pages/loginPage';
import LogoutPage from '../pages/logoutPage';

describe('Logout Test using POM', () => {
  const loginPage = new LoginPage();
  const logoutPage = new LogoutPage();

  it('should login and then logout successfully', () => {
    loginPage.visit();
    loginPage.login('standard_user', 'secret_sauce');

    logoutPage.openMenu();
    logoutPage.clickLogout();

    logoutPage.verifyLoggedOut();
  });
});
