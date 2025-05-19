class LoginPage {
    visit() {
        cy.visit('/index.php?route=account/login');
    }
    getLoginTitle() {
        return cy.get('h2').contains('Returning Customer');
    }

    getEmailInput() {
        return cy.get('#input-email');
    }

    getPasswordInput() {
        return cy.get('#input-password');
    }
    getLoginButton() {
        return cy.get('input[type="submit"]');
    }
}
export const loginPage = new LoginPage();