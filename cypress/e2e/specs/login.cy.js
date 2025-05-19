import { loginPage } from "../pages/loginPage";


describe('Login flow', () => {
    beforeEach(() => {
        loginPage.visit();
    });

    it('Allows the user to successfully log in', () => {
        loginPage.getLoginTitle().should('be.visible');
        loginPage.getEmailInput().type('fallaperoesfeature+test@gmail.com');
        loginPage.getPasswordInput().type('Ax9p#2Ld');
        loginPage.getLoginButton().click();
    });
});