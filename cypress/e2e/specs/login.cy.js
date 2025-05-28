import { loginPage } from "../pages/loginPage";

describe('Login flow', () => {
    beforeEach(() => {
        loginPage.visit();
    });

    it('Allows the user to successfully log in', () => {
        const email = Cypress.env('userEmail');
        const password = Cypress.env('userPassword');
        //fill the login form
        loginPage.getLoginTitle().should('be.visible');
        loginPage.getEmailInput().type(email);
        loginPage.getPasswordInput().type(password);
        loginPage.getLoginButton().click();
        // Verifies that the user was successfully redirected and key dashboard elements are visible
        cy.origin('https://opencart.abstracta.us', () => {
            cy.url().should('include', '/account');
            const headers = [
                'My Account',
                'My Orders',
                'My Affiliate Account',
                'Newsletter'
            ];
            headers.forEach(text => {
                cy.get('h2').contains(text).should('be.visible');
            });
        });


    });
});